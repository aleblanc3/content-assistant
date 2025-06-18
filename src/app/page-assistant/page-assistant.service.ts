import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PageAssistantService {

  constructor() { }

  submitURL(source: string, prototype: string) {
    source = source.trim().replace(/^[^\w]+|[^\w]+$/g, '').replace(/(https?:\/\/)?(www\.)?/i, ''); // trim any unnecessary characters
    prototype = prototype.trim().replace(/^[^\w]+|[^\w]+$/g, '').replace(/(https?:\/\/)?(www\.)?/i, ''); 
    // Currently configuring it to specific github organizations:
    //if (source.host == "cra-design.github.io" || urlInput.host == "gc-proto.github.io" || urlInput.host == "test.canada.ca" || urlInput.host == "cra-proto.github.io") { //github links
    	// Set the iframe src and handle the error
	 // $("#url-frame").attr("src", urlInput.href);
    console.log(`URLs received: source: ${source}, prototype: ${prototype}.`);
  }
  
  //updateIframeFromURL(url: string) {
  //$('#upload-chooser').addClass("hidden");
  //$('#url-upload-input').addClass("hidden");
  //$('#url-upload-preview').removeClass("hidden");
  //$("#url-frame").addClass("hidden"); //reset iframe hidden
  //$("#url-invalid-msg").addClass("hidden");
  //$("#canada-ca-msg").addClass("hidden");
  //$("#other-site-msg").addClass("hidden");
  //var bUrlInput = isValidUrl(url);
  //if (bUrlInput == false) { //invalid url
    //unhide URL invalid message
  //  $("#url-invalid-msg").removeClass("hidden");
  //  $('#url-upload-input').removeClass("hidden");
 //   return;
  //}

}
