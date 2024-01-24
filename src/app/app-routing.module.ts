import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './home/landing-page/landing-page.component';
import { ContactHomeComponent } from './contact/contact-home/contact-home.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'contact', component: ContactHomeComponent },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'information', loadChildren: () => import('./info/info.module').then(m => m.InfoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
