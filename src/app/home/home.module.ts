import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FeaturesComponent } from './features/features.component';
import { HeroComponent } from './hero/hero.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    FeaturesComponent,
    HeroComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
