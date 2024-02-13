import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { FeaturesComponent } from './features/features.component';
import { HeroComponent } from './hero/hero.component';
import { ArrowDividerAnimatedComponent } from '../shared/arrow-divider-animated/arrow-divider-animated.component';
import { ArrowDividerComponent } from '../shared/arrow-divider/arrow-divider.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { ContactEmailComponent } from '../shared/contact-email/contact-email.component';
import { ContactTelComponent } from '../shared/contact-tel/contact-tel.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    FeaturesComponent,
    HeroComponent,
    ContactInformationComponent
  ],
  imports: [
    CommonModule,
    ArrowDividerAnimatedComponent,
    ArrowDividerComponent,
    ContactEmailComponent,
    ContactTelComponent,
    RouterLink
  ]
})
export class HomeModule { }
