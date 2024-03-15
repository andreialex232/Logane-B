import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LegalComponent } from './legal/legal.component';
import { FooterInfoHomeComponent } from './footer-info/info-home/info-home.component';
import { FeesHomeComponent } from './fees/fees-home/fees-home.component';
import { BecomeADriverHomeComponent } from './become-a-driver/become-a-driver-home/become-a-driver-home.component';
import { PersonalCarDriverHomeComponent } from './personal-car-driver/personal-car-driver-home/personal-car-driver-home.component';
import { BenefitsHomeComponent } from './benefits/benefits-home/benefits-home.component';

const routes: Routes = [
  { path: '',
    component: FooterInfoHomeComponent
  },
  { path: 'cum-devin-sofer',
    title: 'Cum devin sofer partener',
    component: BecomeADriverHomeComponent
  },
  {
    path: 'sofer-partener-cu-masina-personala',
    title: 'Cum devin sofer partener cu masina personala',
    component: PersonalCarDriverHomeComponent
  },
  { path: 'venituri-cheltuieli-comisioane',
    title: 'Comisioane',
    component: FeesHomeComponent
  },
  { path: 'legal',
    title: 'OUG 49/2019',
    component: LegalComponent
  },
  {
    path: 'ce-oferim',
    title: 'Ce Oferim',
    component: BenefitsHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
