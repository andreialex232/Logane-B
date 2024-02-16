import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { InfoRoutingModule } from './info-routing.module';

import { BecomeADriverComponent } from './become-a-driver/become-a-driver.component';
import { FeesComponent } from './fees/fees.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { IncomeComponent } from './income/income.component';
import { LegalComponent } from './legal/legal.component';
import { EmploymentComponent } from './employment/employment.component';
import { GeneralInfoComponent } from './footer-info/general-info/general-info.component';
import { FooterInfoHomeComponent } from './footer-info/footer-info-home/footer-info-home.component';
import { LegalInfoComponent } from './footer-info/legal-info/legal-info.component';
import { PartnersComponent } from './footer-info/partners/partners.component';


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
    InfoRoutingModule
  ]
})
export class InfoModule { }
