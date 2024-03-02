import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { InfoRoutingModule } from './info-routing.module';

import { SendEmailFormComponent } from '../shared/send-email-form/send-email-form.component';

import { BecomeADriverComponent } from './become-a-driver/become-a-driver.component';
import { FeesComponent } from './fees/fees.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { IncomeComponent } from './income/income.component';
import { LegalComponent } from './legal/legal.component';
import { EmploymentComponent } from './employment/employment.component';
import { GeneralInfoComponent } from './footer-info/info-home-general-info/info-home-general-info';
import { FooterInfoHomeComponent } from './footer-info/info-home/info-home.component';
import { LegalInfoComponent } from './footer-info/info-home-legal-info/info-home-legal-info';
import { PartnersComponent } from './footer-info/info-home-partners/info-home-partners';


@NgModule({
  declarations: [
    BecomeADriverComponent,
    FeesComponent,
    CheckoutComponent,
    IncomeComponent,
    LegalComponent,
    EmploymentComponent,
    GeneralInfoComponent,
    FooterInfoHomeComponent,
    LegalInfoComponent,
    PartnersComponent
  ],
  imports: [
    CommonModule,
    InfoRoutingModule,
    SendEmailFormComponent
  ]
})
export class InfoModule { }
