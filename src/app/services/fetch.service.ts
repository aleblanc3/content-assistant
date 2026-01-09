import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  //Block unknown hosts
  private prodHost = "www.canada.ca";
  private protoHosts = new Set([
    "proto-cra.github.io",
    "cra-design.github.io",
    //"cra-proto.github.io", //Currently blocked by browser because it looks like a phishing site
    //"gc-proto.github.io", //CORS error but redirects to test.canada.ca which works
    "test.canada.ca",
  ]);
  private getAllowedHosts(mode: "prod" | "proto" | "both"): Set<string> {
    const allowed = new Set<string>();
    if (mode === "prod" || mode === "both") allowed.add(this.prodHost);
    if (mode === "proto" || mode === "both") this.protoHosts.forEach(host => allowed.add(host));
    return allowed;
  }

  //Validates URL and checks if it's in the specified allowed host list
  private validateHost(
    url: string,
    hostMode: "prod" | "proto" | "both" | "none"
  ): string {
    url = url.trim();

    let hostname: string;
    try {
      const parsedUrl = new URL(url);
      if (parsedUrl.protocol !== "https:" || /\s/.test(url)) throw new Error();
      hostname = parsedUrl.hostname.toLowerCase();
    } catch {
      throw new Error(`Invalid URL: ${url}`)
    }

    if (hostMode !== "none") {
      const allowedHosts = this.getAllowedHosts(hostMode);
      if (!allowedHosts.has(hostname)) {
        throw new Error(`Blocked host: ${hostname} blocked for url ${url}`);
      }
    }

    return url;
  }

  //Uses specified fetch method and retries if initial fetch fails (can happen due to intermittent server issues etc.)
  public async fetchWithRetry(
    url: string,
    mode: "GET" | "HEAD" = "HEAD",
    retries = 3,
    delay: number | "random" | "none" = "none",
    suppressErrors = false
  ): Promise<Response> {
    for (let attempt = 1; attempt <= retries; attempt++) {
      await this.simulateDelay(delay);
      try {
        const response =
          mode === "HEAD"
            ? await fetch(url, { method: "HEAD" }) //removed cache: "no-store" from { method: "HEAD", cache: "no-store" } 
            : await fetch(url); // plain GET to avoid CORS error
        if (response.ok) return response;
        else {
          if (!suppressErrors) { console.warn(`Fetch attempt #${attempt}. Status: ${response.status}. Method: ${mode}`); }
          if (attempt < retries) {
            const backoffDelay = Math.pow(2, attempt - 1) * 200; // 200ms, 400ms, 800ms delay before retry
            await this.delay(backoffDelay);
            continue;
          }
          if (suppressErrors) return this.suppressError(url);
          throw new Error(`Fetch failed ${attempt} times. Method: ${mode}. Status: ${response.status} for ${url}`);
        }
      } catch (error) {
        if (attempt < retries) {
          const backoffDelay = Math.pow(2, attempt - 1) * 200; // 200ms, 400ms, 800ms
          await this.delay(backoffDelay);
          continue;
        }
        if (suppressErrors === true) return this.suppressError(url);
        else if (attempt === retries) throw new Error((error as Error).message);
      }
    }
    if (suppressErrors === true) return this.suppressError(url);
    else throw new Error(`Unexpected error for ${url}`); //fallback, could be CORS or URLs blocked for safety reasons (suspected phishing etc.)
  }

  public async fetchContent(
    url: string,
    hostMode: "prod" | "proto" | "both" | "none" = "both",
    retries = 3,
    delay: number | "random" | "none" = "none",
    suppressErrors = false
  ): Promise<Document> {
    url = this.validateHost(url, hostMode);
    const response = await this.fetchWithRetry(url, "GET", retries, delay, suppressErrors);
    const html = await response.text();
    return new DOMParser().parseFromString(html, "text/html");
  }

  public async fetchStatus(
    url: string,
    hostMode: "prod" | "proto" | "both" | "none" = "both",
    retries = 3,
    delay: number | "random" | "none" = "none",
    delayBetweenRequests = 50 //ms
  ): Promise<Response> {
    url = this.validateHost(url, hostMode);
    if (delayBetweenRequests > 0) { await this.delay(delayBetweenRequests); }
    return this.fetchWithRetry(url, "HEAD", retries, delay);
  }

  //only delays on development build
  public async simulateDelay(delay: number | 'random' | 'none' = 'none'): Promise<void> {
    if (environment.production || delay === 'none') return;

    if (delay === "random") {
      await new Promise(resolve => setTimeout(resolve, 100 + Math.random() * 1500)); //random 0.1 to 1.6 second delay
    }
    else if (typeof delay === "number" && delay > 0) {
      await new Promise(resolve => setTimeout(resolve, delay)); //user input delay
    }
  }

  //adds delay on both dev and prod (useful for adding short delays before retrying a failed fetch, only use this if the delay is required on prod)
  public async delay(delay: number): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, delay)); //user input delay
  }

  //fake Response for suppressing CORS errors (should only be used when fetching external content, hostMode = "none:")
  private suppressError(
    url: string,
    status = 500,
    statusText = "Suppressed fetch error"
  ): Response {
    return new Response(null, {
      status,
      statusText,
      headers: { "X-Suppressed-Error": "true", "X-Source-Url": url },
    });
  }

}
