import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//PrimeNG
import { ButtonModule } from 'primeng/button';
import { TextareaModule } from 'primeng/textarea';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { MessageModule } from 'primeng/message';
import { DividerModule } from 'primeng/divider';

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
    TextareaModule,
    CardModule,
    PanelModule,
    TabViewModule,
    MessageModule,
    DividerModule
  ],
  templateUrl: './page-compare.component.html',
  styles: `
  :host {
      display: block;
    }
    .shadow-diff-container {
      min-height: 200px;
      background: var(--surface-ground);
    }
    
    .diff2html-container {
      min-height: 200px;
    }
    
    .text-diff-container {
      min-height: 200px;
      background: var(--surface-ground);
      font-family: 'Courier New', monospace;
      line-height: 1.5;
    }
    
    .structure-display {
      background: var(--surface-ground);
      padding: 1rem;
      border-radius: 6px;
      font-size: 0.875rem;
      line-height: 1.4;
      max-height: 400px;
      overflow-y: auto;
    }
    
    textarea {
      font-family: 'Courier New', monospace;
      font-size: 0.875rem;
    }

    /*Colours for for diff highlighting*/
    :host ::ng-deep .diff-added {
      background-color: #d4edda;
      color: #155724;
      padding: 2px 4px;
      border-radius: 3px;
    }
    
    :host ::ng-deep .diff-removed {
      background-color: #f8d7da;
      color: #721c24;
      padding: 2px 4px;
      border-radius: 3px;
      text-decoration: line-through;
    }
    
    :host ::ng-deep .diff-unchanged {
      background-color: transparent;
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

      // Add basic styles to shadow DOM
      const style = document.createElement('style');
      style.textContent = `
        .diff-container {
          font-family: 'Courier New', monospace;
          line-height: 1.6;
          padding: 1rem;
        }
        
        .diff-added {
          background-color: #d4edda;
          color: #155724;
          padding: 2px 4px;
          border-radius: 3px;
          border-left: 3px solid #28a745;
          margin: 2px 0;
          display: block;
        }
        
        .diff-removed {
          background-color: #f8d7da;
          color: #721c24;
          padding: 2px 4px;
          border-radius: 3px;
          border-left: 3px solid #dc3545;
          text-decoration: line-through;
          margin: 2px 0;
          display: block;
        }
        
        .diff-unchanged {
          padding: 2px 4px;
          margin: 2px 0;
          display: block;
          color: #6c757d;
        }
        
        .section-header {
          font-weight: bold;
          font-size: 1.1em;
          margin: 1rem 0 0.5rem 0;
          padding: 0.5rem;
          background: #f8f9fa;
          border-radius: 3px;
        }
      `;

      if (this.shadowRoot) {
        this.shadowRoot.appendChild(style);
      }
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
      .rendered-diff-container {
        font-family: inherit;
        line-height: 1.6;
        padding: 1rem;
      }
      
      .section-header {
        font-weight: bold;
        font-size: 1.1em;
        margin: 0 0 1rem 0;
        padding: 0.5rem;
        background: #f8f9fa;
        border-radius: 3px;
        border-left: 4px solid #007bff;
      }
      
      .rendered-content {
        /* Reset some styles to allow natural HTML rendering */
        font-family: inherit;
        line-height: inherit;
        
        /* Ensure the content looks like a normal webpage */
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }
      
      /* Style the diff highlighting from htmldiff-js */
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
      
      /* Preserve normal HTML styling */
      .rendered-content h1, .rendered-content h2, .rendered-content h3,
      .rendered-content h4, .rendered-content h5, .rendered-content h6 {
        margin: 1em 0 0.5em 0;
        font-weight: bold;
      }
      
      .rendered-content h1 { font-size: 2em; }
      .rendered-content h2 { font-size: 1.5em; }
      .rendered-content h3 { font-size: 1.17em; }
      .rendered-content h4 { font-size: 1em; }
      .rendered-content h5 { font-size: 0.83em; }
      .rendered-content h6 { font-size: 0.67em; }
      
      .rendered-content p {
        margin: 1em 0;
      }
      
      .rendered-content ul, .rendered-content ol {
        margin: 1em 0;
        padding-left: 2em;
      }
      
      .rendered-content li {
        margin: 0.5em 0;
      }
      
      .rendered-content a {
        color: #007bff;
        text-decoration: underline;
      }
      
      .rendered-content a:hover {
        color: #0056b3;
      }
      
      .rendered-content table {
        border-collapse: collapse;
        width: 100%;
        margin: 1em 0;
      }
      
      .rendered-content th, .rendered-content td {
        border: 1px solid #ddd;
        padding: 8px 12px;
        text-align: left;
      }
      
      .rendered-content th {
        background-color: #f8f9fa;
        font-weight: bold;
      }
      
      .rendered-content code {
        background-color: #f8f9fa;
        padding: 2px 4px;
        border-radius: 3px;
        font-family: 'Courier New', monospace;
        font-size: 0.9em;
      }
      
      .rendered-content pre {
        background-color: #f8f9fa;
        padding: 1em;
        border-radius: 6px;
        overflow-x: auto;
        font-family: 'Courier New', monospace;
        line-height: 1.4;
      }
      
      .rendered-content blockquote {
        border-left: 4px solid #ddd;
        padding-left: 1em;
        margin: 1em 0;
        color: #666;
        font-style: italic;
      }
      
      /* Custom styles that might be in the original HTML */
      .rendered-content .box, .rendered-content .featured-box {
        border: 1px solid #ddd;
        padding: 1em;
        margin: 1em 0;
        border-radius: 6px;
        background-color: #f9f9f9;
      }
      
      .rendered-content .featured-box {
        border-color: #007bff;
        background-color: #f0f8ff;
      }
      
      .rendered-content button {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 0.9em;
      }
      
      .rendered-content button:hover {
        background-color: #0056b3;
      }
      
      .rendered-content nav ul {
        list-style: none;
        padding: 0;
        display: flex;
        gap: 1em;
      }
      
      .rendered-content nav li {
        margin: 0;
      }
      
      .rendered-content header, .rendered-content footer {
        padding: 1em 0;
        border-bottom: 1px solid #eee;
      }
      
      .rendered-content footer {
        border-bottom: none;
        border-top: 1px solid #eee;
        margin-top: 2em;
        color: #666;
        font-size: 0.9em;
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
