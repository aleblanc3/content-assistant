import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class CustomTitleStrategy extends TitleStrategy {
  constructor(
    private readonly translate: TranslateService,
    private readonly title: Title
  ) {
    super();
  }
  override updateTitle(snapshot: RouterStateSnapshot) {
    const titleKey = this.buildTitle(snapshot);
    if (titleKey) {
      this.translate.get(titleKey).subscribe((translated: string) => {
        this.title.setTitle(translated);
      });
    }
  }
}