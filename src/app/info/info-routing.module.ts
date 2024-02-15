import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BecomeADriverComponent } from './become-a-driver/become-a-driver.component';
import { FeesComponent } from './fees/fees.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { EmploymentComponent } from './employment/employment.component';
import { IncomeComponent } from './income/income.component';
import { LegalComponent } from './legal/legal.component';
import { FooterInfoHomeComponent } from './footer-info/footer-info-home/footer-info-home.component';

const routes: Routes = [
  { path: '', component: FooterInfoHomeComponent },
  { path: 'how-to-become-a-driver', title: 'Cum devin sofer partener', component: BecomeADriverComponent },
  { path: 'fees', title: 'Comisioane', component: FeesComponent },
  { path: 'checkout', title: 'Casa de marcat', component: CheckoutComponent },
  { path: 'employment', title: 'Carte de munca', component: EmploymentComponent },
  { path: 'income', title: 'Venituri si cheltuieli', component: IncomeComponent },
  { path: 'legal', title: 'OUG 49/2019', component: LegalComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
