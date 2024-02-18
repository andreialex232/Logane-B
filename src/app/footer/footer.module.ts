import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterHomeComponent } from './footer-home/footer-home.component';
import { FooterNavLinksComponent } from './footer-nav-links/footer-nav-links.component';
import { FooterGeneralInfoComponent } from './footer-general-info/footer-general-info.component';
import { FooterLegalInfoComponent } from './footer-legal-info/footer-legal-info.component';

import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    FooterHomeComponent,
    FooterNavLinksComponent,
    FooterGeneralInfoComponent,
    FooterLegalInfoComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [FooterHomeComponent]
})
export class FooterModule { }
