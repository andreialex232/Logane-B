import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { InfoRoutingModule } from './info-routing.module';
import { InfoHomeComponent } from './info-home/info-home.component';


@NgModule({
  declarations: [
    InfoHomeComponent
  ],
  imports: [
    CommonModule,
    InfoRoutingModule
  ]
})
export class InfoModule { }
