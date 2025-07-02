import { Component, Input, Output, EventEmitter } from '@angular/core'; 
import { TranslateModule } from "@ngx-translate/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//primeNG
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';

import { DomSanitizer, SafeResourceUrl, SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

import { sampleHtmlA, sampleHtmlB } from './sample-data';

@Component({
  selector: 'ca-upload-content',
  imports: [CommonModule, TranslateModule, FormsModule, ButtonModule, InputTextModule, CardModule],
  templateUrl: './upload-content.component.html',
  styles: `
    :host {
      display: block;
    }
  `
})
export class UploadContentComponent {

  //Accept input from parent component
  @Input() taskType = '';
  @Input() uploadType = '';

  //Export data to parent component
  @Output() uploadData = new EventEmitter<{ sourceURL: string, sourceHTML: string, prototypeURL?: string, prototypeHTML?: string }>();

  //Initialize stuff
  source: string = '';
  prototype: string = '';
  mySource: string = '';
  myPrototype: string = '';
  error: string = '';
  loading = false;

  //This runs first, use it to inject services & other dependencies (delete if not needed)
  constructor(private sanitizer: DomSanitizer, private http: HttpClient) { }

  //Reset button
  resetInput() {
    this.mySource = '';
    this.myPrototype = '';
    this.loading = false;
  }

  //Gets HTML content from URL (used by getHtmlContent)
  async fetchHtml(url: string, label: string): Promise<string> {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`${label} fetch failed: HTTP ${response.status}`);
    console.warn(`Response code: ${response.status}`);
    return response.text();
  }

  //Updates iframe using both fetchHtml() and loadIntoIframe()
  async getHtmlContent() {
    this.loading = true;
    this.error = '';

    try {
      //Block unknown hosts
      const allowedHosts = new Set([
        "cra-design.github.io",
        "cra-proto.github.io",
        "gc-proto.github.io",
        "test.canada.ca",
        "www.canada.ca"
      ]);

      //Set source
      const sourceInput = new URL(this.source); //Check URL
      if (!allowedHosts.has(sourceInput.host)) {
        throw new Error(`${sourceInput.host} is blocked`);
      }
      var htmlA = await this.fetchHtml(this.source, "Source"); //Get HTML content
      if (sourceInput.host == "www.canada.ca") { //Fix Canada.ca pages
        htmlA = htmlA.replace(/=("|')\//g, '="https://www.canada.ca/')
      }

      //Set prototype
      if (this.taskType == "task2Contents") {
        const prototypeInput = new URL(this.prototype); //Check URL
        if (!allowedHosts.has(prototypeInput.host)) {
          throw new Error(`${prototypeInput.host} is blocked`);
        }
        var htmlB = await this.fetchHtml(this.prototype, "Prototype"); //Get HTML content
        if (prototypeInput.host == "www.canada.ca") { //Fix Canada.ca pages
          htmlB = htmlB.replace(/=("|')\//g, '="https://www.canada.ca/')
        }
      }
      else { htmlB = "Get AI content" }

      //Emit data
      this.uploadData.emit({
        sourceURL: this.source,
        sourceHTML: htmlA,
        prototypeURL: this.prototype,
        prototypeHTML: htmlB
      });

      //Set variables to display
      this.mySource = this.source;
      this.myPrototype = this.prototype;

    }
    catch (err: any) {
      this.error = `Failed to fetch page: ${err.message}`;
    }
  }
    //Emit sample data
    loadSampleData() {
      this.uploadData.emit({
        sourceURL: "Sample data A",
        sourceHTML: sampleHtmlA,
        prototypeURL: "Sample data B",
        prototypeHTML: sampleHtmlB
      });
      //Set variables to display
      this.mySource = "Sample data A";
      this.myPrototype = "Sample data B";
  }
}
