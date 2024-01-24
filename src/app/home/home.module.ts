import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FeaturesComponent } from './features/features.component';
import { HeroComponent } from './hero/hero.component';
import { ArrowDividerAnimatedComponent } from '../shared/arrow-divider-animated/arrow-divider-animated.component';
import { ArrowDividerComponent } from '../shared/arrow-divider/arrow-divider.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';



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
    ArrowDividerComponent
  ]
})
export class HomeModule { }
