import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutHomeComponent } from './about-home/about-home.component';
import { AboutUsFeaturesComponent } from './about-us-features/about-us-features.component';


@NgModule({
  declarations: [
    AboutHomeComponent,
    AboutUsFeaturesComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
