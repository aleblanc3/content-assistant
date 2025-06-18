import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";
import { FormsModule, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PageAssistantService } from "../../../../code-to-integrate/page-assistant.service";
import { DomSanitizer, SafeResourceUrl, SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'ca-page-assistant',
  imports: [CommonModule, TranslateModule, FormsModule, ReactiveFormsModule, InputTextModule, ButtonModule, MessageModule],
  templateUrl: './page-assistant.component.html',
  styles: ``
})
export class PageAssistantComponent {
  pageAssistantService = inject(PageAssistantService);

  //Initialize stuff
  source: string = '';
  prototype: string = '';
  iframeContentA: SafeHtml | null = null;
  iframeContentB: SafeHtml | null = null;
  error: string = '';

  //This runs first, use it to inject services & other dependencies
  constructor(private sanitizer: DomSanitizer, private http: HttpClient) {
  }

  //Loads content into iframe (used by updateIframeFromURL)
  loadIntoIframe(frame: string, content: string): void {
    const iframeContent = this.sanitizer.bypassSecurityTrustHtml(content);
    if (frame === 'A') {
      this.iframeContentA = iframeContent;
    } else if (frame === 'B') {
      this.iframeContentB = iframeContent;
    } else {
      console.warn('Unknown frame:', frame);
    }
  }

  //Gets HTML content from URL (used by updateIframeFromURL)
  async fetchHtml(url: string, label: string): Promise<string> {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`${label} fetch failed: HTTP ${response.status}`);
    console.warn(`Response code: ${response.status}`);
    return response.text();
  }

  //Updates iframe using both fetchHtml() and loadIntoIframe()
  async updateIframeFromURL() {
    this.error = '';
    this.iframeContentA = null;
    this.iframeContentB = null;

    try {
      //Block unknown hosts
      const allowedHosts = new Set([
        "cra-design.github.io",
        "cra-proto.github.io",
        "gc-proto.github.io",
        "test.canada.ca",
        "www.canada.ca"
      ]);
      
      const sourceInput = new URL(this.source);    
      if (!allowedHosts.has(sourceInput.host)) {
        throw new Error(`${sourceInput.host} is blocked`);
      }
      
      const prototypeInput = new URL(this.prototype);
      if (!allowedHosts.has(prototypeInput.host)) {
        throw new Error(`${prototypeInput.host} is blocked`);
      }

      //Get HTML content
      var htmlA = await this.fetchHtml(this.source, "Source");
      var htmlB = await this.fetchHtml(this.prototype, "Prototype");

      //Fix Canada.ca pages
      if(sourceInput.host == "www.canada.ca"){
        htmlA = htmlA.replace(/=("|')\//g,'="https://www.canada.ca/')
      }
      if(prototypeInput.host == "www.canada.ca"){
        htmlB = htmlB.replace(/=("|')\//g,'="https://www.canada.ca/')
      }
      
      //Load into iframe
      this.loadIntoIframe("A", htmlA);
      this.loadIntoIframe("B", htmlB);

    }
    catch (err: any) {
      this.error = `Failed to fetch page: ${err.message}`;
    }
  }





  //Switch to reactive forms if I need a more complex form (currently using template driven form)
 // urlForm = new FormGroup({
//    source: new FormControl(''),
 //   prototype: new FormControl(''),
 // });
//  submitURL() {
 //   this.pageAssistantService.submitURL(
 //     this.urlForm.value.source ?? '',
 //     this.urlForm.value.prototype ?? '',
 //   );
 // }
  //End of reactive form code


}
