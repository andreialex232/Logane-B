import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { InfoRoutingModule } from './info-routing.module';

import { SendEmailFormComponent } from '../shared/send-email-form/send-email-form.component';

import { BecomeADriverComponent } from './become-a-driver/become-a-driver.component';
import { FeesComponent } from './fees/fees.component';
import { LegalComponent } from './legal/legal.component';
import { GeneralInfoComponent } from './footer-info/info-home-general-info/info-home-general-info';
import { FooterInfoHomeComponent } from './footer-info/info-home/info-home.component';
import { LegalInfoComponent } from './footer-info/info-home-legal-info/info-home-legal-info';
import { PartnersComponent } from './footer-info/info-home-partners/info-home-partners';
import { PersonalCarDriverComponent } from './personal-car-driver/personal-car-driver.component';
import { Art12Component } from './legal/chapters/chapter-3/art-12/art-12.component';
import { Art13Component } from './legal/chapters/chapter-3/art-13/art-13.component';
import { IntroComponent } from './legal/intro/intro.component';
import { Art2Component } from './legal/chapters/chapter-1/art-2/art-2.component';
import { Art7Component } from './legal/chapters/chapter-2/art-7/art-7.component';
import { Chapter1HomeComponent } from './legal/chapters/chapter-1/chapter-1-home/chapter-1-home.component';
import { Art1Component } from './legal/chapters/chapter-1/art-1/art-1.component';
import { Art3Component } from './legal/chapters/chapter-1/art-3/art-3.component';
import { Chapter2HomeComponent } from './legal/chapters/chapter-2/chapter-2-home/chapter-2-home.component';
import { Art4Component } from './legal/chapters/chapter-2/art-4/art-4.component';
import { Art5Component } from './legal/chapters/chapter-2/art-5/art-5.component';
import { Art6Component } from './legal/chapters/chapter-2/art-6/art-6.component';
import { Art8Component } from './legal/chapters/chapter-2/art-8/art-8.component';
import { Art9Component } from './legal/chapters/chapter-2/art-9/art-9.component';
import { Art10Component } from './legal/chapters/chapter-2/art-10/art-10.component';
import { Chapter3HomeComponent } from './legal/chapters/chapter-3/chapter-3-home/chapter-3-home.component';
import { Art11Component } from './legal/chapters/chapter-3/art-11/art-11.component';
import { Art14Component } from './legal/chapters/chapter-3/art-14/art-14.component';
import { Art15Component } from './legal/chapters/chapter-3/art-15/art-15.component';
import { Art16Component } from './legal/chapters/chapter-3/art-16/art-16.component';
import { Chapter4HomeComponent } from './legal/chapters/chapter-4/chapter-4-home/chapter-4-home.component';
import { Art17Component } from './legal/chapters/chapter-4/art-17/art-17.component';
import { Art18Component } from './legal/chapters/chapter-4/art-18/art-18.component';
import { Art19Component } from './legal/chapters/chapter-4/art-19/art-19.component';
import { Art20Component } from './legal/chapters/chapter-4/art-20/art-20.component';
import { Art21Component } from './legal/chapters/chapter-4/art-21/art-21.component';
import { Art22Component } from './legal/chapters/chapter-4/art-22/art-22.component';
import { Art23Component } from './legal/chapters/chapter-4/art-23/art-23.component';
import { Art24Component } from './legal/chapters/chapter-4/art-24/art-24.component';
import { Chapter5HomeComponent } from './legal/chapters/chapter-5/chapter-5-home/chapter-5-home.component';
import { Art25Component } from './legal/chapters/chapter-5/art-25/art-25.component';
import { Art26Component } from './legal/chapters/chapter-5/art-26/art-26.component';
import { Art27Component } from './legal/chapters/chapter-5/art-27/art-27.component';
import { Art28Component } from './legal/chapters/chapter-5/art-28/art-28.component';
import { Art29Component } from './legal/chapters/chapter-5/art-29/art-29.component';
import { Chapter6HomeComponent } from './legal/chapters/chapter-6/chapter-6-home/chapter-6-home.component';
import { Art30Component } from './legal/chapters/chapter-6/art-30/art-30.component';
import { Art31Component } from './legal/chapters/chapter-6/art-31/art-31.component';
import { Art32Component } from './legal/chapters/chapter-6/art-32/art-32.component';
import { Art33Component } from './legal/chapters/chapter-6/art-33/art-33.component';
import { Art34Component } from './legal/chapters/chapter-6/art-34/art-34.component';
import { Art35Component } from './legal/chapters/chapter-6/art-35/art-35.component';
import { Chapter7HomeComponent } from './legal/chapters/chapter-7/chapter-7-home/chapter-7-home.component';
import { Art36Component } from './legal/chapters/chapter-7/art-36/art-36.component';
import { Art37Component } from './legal/chapters/chapter-7/art-37/art-37.component';
import { Art38Component } from './legal/chapters/chapter-7/art-38/art-38.component';
import { Art39Component } from './legal/chapters/chapter-7/art-39/art-39.component';
import { OutroComponent } from './legal/outro/outro.component';
import { SubTitleComponent } from './legal/sub-title/sub-title.component';


@NgModule({
  declarations: [
    BecomeADriverComponent,
    FeesComponent,
    LegalComponent,
    GeneralInfoComponent,
    FooterInfoHomeComponent,
    LegalInfoComponent,
    PartnersComponent,
    PersonalCarDriverComponent,
    Art12Component,
    Art13Component,
    IntroComponent,
    Art2Component,
    Art7Component,
    Chapter1HomeComponent,
    Art1Component,
    Art3Component,
    Chapter2HomeComponent,
    Art4Component,
    Art5Component,
    Art6Component,
    Art8Component,
    Art9Component,
    Art10Component,
    Chapter3HomeComponent,
    Art11Component,
    Art14Component,
    Art15Component,
    Art16Component,
    Chapter4HomeComponent,
    Art17Component,
    Art18Component,
    Art19Component,
    Art20Component,
    Art21Component,
    Art22Component,
    Art23Component,
    Art24Component,
    Chapter5HomeComponent,
    Art25Component,
    Art26Component,
    Art27Component,
    Art28Component,
    Art29Component,
    Chapter6HomeComponent,
    Art30Component,
    Art31Component,
    Art32Component,
    Art33Component,
    Art34Component,
    Art35Component,
    Chapter7HomeComponent,
    Art36Component,
    Art37Component,
    Art38Component,
    Art39Component,
    OutroComponent,
    SubTitleComponent,
  ],
  imports: [
    CommonModule,
    InfoRoutingModule,
    SendEmailFormComponent
  ]
})
export class InfoModule { }
