import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {AppComponent} from './app.component';
import {ContactComponent} from './contact/contact.component';
import {HomepageComponent} from './homepage/homepage.component';
import {ExperienceComponent} from './experience/experience.component';
import {HistoryComponent} from './history/history.component';


export const router: Routes = [
{path: '', component: HomepageComponent},
{path: 'home', component: HomepageComponent},
{path: 'contact', component: ContactComponent}
{path: 'experience', component: ExperienceComponent},
{path: 'history', component: HistoryComponent},

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);