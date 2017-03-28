import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {AppComponent} from './app.component';
import {ContactComponent} from './contact/contact.component';
import {HomepageComponent} from './homepage/homepage.component';


export const router: Routes = [
{path: '', component: HomepageComponent},
{path: 'contact', component: ContactComponent}

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);