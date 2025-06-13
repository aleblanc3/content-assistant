import { Routes } from '@angular/router';
import { LandingComponent } from './content/landing.component';
import { NotFoundComponent } from './content/not-found.component';
import { PageAssistantComponent } from './page-assistant/page-assistant.component';
import { ImageAssistantComponent } from './image-assistant/image-assistant.component';
import { TranslationAssistantComponent } from './translation-assistant/translation-assistant.component';
import { AboutComponent } from './content/about.component';

export const routes: Routes = [    
    {
        path: '',
        component: LandingComponent,
        title: 'title.landing',
        data: { lang: 'en' },
    },
    {
        path: 'fr',
        component: LandingComponent,
        title: 'title.landing',
        data: { lang: 'fr' },
    },
    {
        path: 'page-assistant',
        component: PageAssistantComponent,
        title: 'title.page',
        data: { lang: 'en' },
    },
    {
        path: 'image-assistant',
        component: ImageAssistantComponent,
        title: 'title.image',
        data: { lang: 'en' },
    },
    {
        path: 'translation-assistant',
        component: TranslationAssistantComponent,
        title: 'title.translation',
        data: { lang: 'fr' },
    },
    {
        path: 'about-us',
        component: AboutComponent,
        title: 'title.about',
        data: { lang: 'en' },
    },
    {
        path: '**',
        component: NotFoundComponent,
        title: 'title.404',
    },
];
export default routes;