import { Routes } from '@angular/router';
import { LandingComponent } from './views/static/landing.component';
import { NotFoundComponent } from './views/static/not-found.component';
import { PageAssistantComponent } from './views/page-assistant/page-assistant.component';
import { ImageAssistantComponent } from './views/image-assistant/image-assistant.component';
import { TranslationAssistantComponent } from './views/translation-assistant/translation-assistant.component';
import { ProjectAssistantComponent } from './views/project-assistant/project-assistant.component';
import { AboutComponent } from './views/static/about.component';
import { TestComponent } from './views/my-test/test.component';

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
        data: { lang: 'en' },
    },
    {
        path: 'project-assistant',
        component: ProjectAssistantComponent,
        title: 'title.project',
        data: { lang: 'en' },
    },
    {
        path: 'about-us',
        component: AboutComponent,
        title: 'title.about',
        data: { lang: 'en' },
    },
    {
        path: 'test',
        component: TestComponent,
        title: 'title.test',
        data: { lang: 'en' },
    },
    {
        path: '**',
        component: NotFoundComponent,
        title: 'title.404',
    },
];
export default routes;
