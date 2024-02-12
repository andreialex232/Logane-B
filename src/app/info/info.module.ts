import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { InfoRoutingModule } from './info-routing.module';
import { InfoHomeComponent } from './info-home/info-home.component';

import { BecomeADriverComponent } from './become-a-driver/become-a-driver.component';
import { FeesComponent } from './fees/fees.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { IncomeComponent } from './income/income.component';
import { LegalComponent } from './legal/legal.component';
import { EmploymentComponent } from './employment/employment.component';


@NgModule({
  declarations: [
    InfoHomeComponent,
    BecomeADriverComponent,
    FeesComponent,
    CheckoutComponent,
    IncomeComponent,
    LegalComponent,
    EmploymentComponent
  ],
  imports: [
    CommonModule,
    InfoRoutingModule
  ]
})
export class InfoModule { }
