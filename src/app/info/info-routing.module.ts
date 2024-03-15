import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BecomeADriverComponent } from './become-a-driver/become-a-driver.component';
import { LegalComponent } from './legal/legal.component';
import { FooterInfoHomeComponent } from './footer-info/info-home/info-home.component';
import { PersonalCarDriverComponent } from './personal-car-driver/personal-car-driver.component';
import { FeesHomeComponent } from './fees/fees-home/fees-home.component';

const routes: Routes = [
  { path: '',
    component: FooterInfoHomeComponent
  },
  { path: 'cum-devin-sofer',
    title: 'Cum devin sofer partener',
    component: BecomeADriverComponent
  },
  {
    path: 'sofer-partener-cu-masina-personala',
    title: 'Cum devin sofer partener cu masina personala',
    component: PersonalCarDriverComponent
  },
  { path: 'venituri-cheltuieli-comisioane',
    title: 'Comisioane',
    component: FeesHomeComponent
  },
  { path: 'legal',
    title: 'OUG 49/2019',
    component: LegalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
