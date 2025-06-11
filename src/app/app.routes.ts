import { Routes } from '@angular/router';
import { LandingComponent } from './content/landing.component';
import { PageAssistantComponent } from './page-assistant/page-assistant.component';
import { ImageAssistantComponent } from './image-assistant/image-assistant.component';
import { TranslationAssistantComponent } from './translation-assistant/translation-assistant.component';
import { AboutComponent } from './content/about.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingComponent,
        title: 'Content assistant',
    },
    {
        path: 'page-assistant',
        component: PageAssistantComponent,
        title: 'Page assistant',
    },
    {
        path: 'image-assistant',
        component: ImageAssistantComponent,
        title: 'Image assistant',
    },
    {
        path: 'translation-assistant',
        component: TranslationAssistantComponent,
        title: 'Translation assistant',
    },
    {
        path: 'about-us',
        component: AboutComponent,
        title: 'About us',
    },
];
export default routes;