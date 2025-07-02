import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//PrimeNG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
//import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
//import { MessageModule } from 'primeng/message';
//import { DividerModule } from 'primeng/divider';

//Diffs
import {
  Diff2HtmlUIConfig,
  Diff2HtmlUI,
} from 'diff2html/lib/ui/js/diff2html-ui';
import { createPatch } from 'diff';
import { Diff } from '@ali-tas/htmldiff-js';

interface DiffOptions { //Used when generating an HTML diff, tweaks how sensitive diff is to whitespace, word repitition, etc.
  repeatingWordsAccuracy?: number;
  ignoreWhiteSpaceDifferences?: boolean;
  orphanMatchThreshold?: number;
  matchGranularity?: number;
  combineWords?: boolean;
}

@Component({
  selector: 'ca-page-compare',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    CardModule,
    TabViewModule,
  ],
  templateUrl: './page-compare.component.html',
  styles: `
  :host {
      display: block;
    }

    /*Diff containers*/
    .shadow-diff-container {
      min-height: 200px;
      background: #FFFFFF;
      color: #000000;
    }
    
    .diff2html-container {
      min-height: 200px;
      background: #FFFFFF;
      color: #000000;
    }
  `
})
export class PageCompareComponent implements AfterViewInit, OnDestroy {

  //Accept input from parent component
  @Input() originalHtml: string = '';
  @Input() modifiedHtml: string = '';

  @ViewChild('shadowDiffContainer', { static: false }) shadowDiffContainer!: ElementRef;
  @ViewChild('diff2htmlContainer', { static: false }) diff2htmlContainer!: ElementRef;

  showResults = false;
  textDiffResult = '';
  originalStructure = '';
  modifiedStructure = '';

  private shadowRoot?: ShadowRoot;

  ngAfterViewInit() {
    // Initialize shadow DOM when the view is ready
    if (this.shadowDiffContainer) {
      this.initializeShadowDOM();
    }
  }

  ngOnDestroy() {
    // Clean up shadow DOM if needed
    this.shadowRoot = undefined;
  }

  private initializeShadowDOM() {
    if (this.shadowDiffContainer && !this.shadowRoot) {
      this.shadowRoot = this.shadowDiffContainer.nativeElement.attachShadow({ mode: 'open' });
    }
  }

  compareHtml() {
    if (!this.originalHtml.trim() || !this.modifiedHtml.trim()) {
      return;
    }

    this.showResults = true;

    // Generate web & code views
    this.generateShadowDOMDiff();
    this.generateDiff2HtmlDiff();
  }
  //Web view
  private generateShadowDOMDiff() {
    if (!this.shadowRoot) {
      this.initializeShadowDOM();
    }

    if (!this.shadowRoot) {
    console.error('Shadow DOM failed to initialize');
    return;
  }

      // Parse HTML using DOMParser
      const parser = new DOMParser();
      const originalDoc = parser.parseFromString(this.originalHtml, 'text/html');
      const modifiedDoc = parser.parseFromString(this.modifiedHtml, 'text/html');

      // Create diff container to render the HTML
      const diffContainer = document.createElement('div');
      diffContainer.className = 'rendered-diff-container';

      // Create the rendered content container
      const renderedContent = document.createElement('div');
      renderedContent.className = 'rendered-content';

      // Use htmldiff-js to get the diff with HTML highlighting
      const options: DiffOptions = {
      repeatingWordsAccuracy: 0,
      ignoreWhiteSpaceDifferences: true,
      orphanMatchThreshold: 0,
      matchGranularity: 4,
      combineWords: true,
    };
      const diffResult = Diff.execute(
        this.originalHtml, 
        this.modifiedHtml, 
        options,
    ).replace(
      /<(ins|del)[^>]*>(\s|&nbsp;|&#32;|&#160;|&#x00e2;|&#x0080;|&#x00af;|&#x202f;|&#xa0;)+<\/(ins|del)>/gis,
      ' ',
    );

      // Parse the diff result and render it
      const diffDoc = parser.parseFromString(diffResult, 'text/html');

      // Clone the body content from the diff result
      if (diffDoc.body) {
        renderedContent.innerHTML = diffDoc.body.innerHTML;
      } else {
        renderedContent.innerHTML = diffResult;
      }

      diffContainer.appendChild(renderedContent);

      // Clear previous content and add new diff
        this.shadowRoot.innerHTML = '';
        this.shadowRoot.appendChild(diffContainer);

        // Add enhanced styles for rendered content
        const style = document.createElement('style');
        style.textContent = this.getRenderedDiffStyles();
        this.shadowRoot.insertBefore(style, this.shadowRoot.firstChild);
      }
    
  

  private getRenderedDiffStyles(): string {
    return `
      /* Import Canada.ca CSS */
        @import url('https://use.fontawesome.com/releases/v5.15.4/css/all.css');
        @import url('https://www.canada.ca/etc/designs/canada/wet-boew/css/theme.min.css');
        @import url('https://www.canada.ca/etc/designs/canada/wet-boew/méli-mélo/2024-09-kejimkujik.min.css');

      /* Custom diff styles */
      .rendered-content ins {
        background-color: #d4edda !important;
        color: #155724 !important;
        text-decoration: none !important;
        padding: 2px 4px;
        border-radius: 3px;
        border: 1px solid #c3e6cb;
        font-weight: 500;
      }
      
      .rendered-content del {
        background-color: #f8d7da !important;
        color: #721c24 !important;
        text-decoration: line-through !important;
        padding: 2px 4px;
        border-radius: 3px;
        border: 1px solid #f5c6cb;
        font-weight: 500;
      }
    `;
  }

  private generateDiff2HtmlDiff() {
    try {
      // Create unified diff patch
      const patch = createPatch(
        '',
        this.originalHtml,
        this.modifiedHtml,
        'Source',
        'Prototype'
      );

      // Configure diff2html
      const configuration: Diff2HtmlUIConfig = {
        drawFileList: false,
        fileListToggle: false,
        fileListStartVisible: false,
        fileContentToggle: false,
        matching: 'lines',
        outputFormat: 'side-by-side',
        synchronisedScroll: true,
        highlight: true,
        renderNothingWhenEmpty: false
      };

      // Clear previous content
      if (this.diff2htmlContainer) {
        this.diff2htmlContainer.nativeElement.innerHTML = '';

        // Create diff2html UI
        const diff2htmlUi = new Diff2HtmlUI(
          this.diff2htmlContainer.nativeElement,
          patch,
          configuration
        );

        diff2htmlUi.draw();
      }
    } catch (error) {
      console.error('Error generating diff2html:', error);
      if (this.diff2htmlContainer) {
        this.diff2htmlContainer.nativeElement.innerHTML = '<p class="p-error">Error generating unified diff view.</p>';
      }
    }
  }

  clearAll() {
    this.originalHtml = '';
    this.modifiedHtml = '';
    this.showResults = false;
    this.textDiffResult = '';
    this.originalStructure = '';
    this.modifiedStructure = '';

    // Clear shadow DOM
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = '';
    }

    // Clear diff2html container
    if (this.diff2htmlContainer) {
      this.diff2htmlContainer.nativeElement.innerHTML = '';
    }
  }
}
