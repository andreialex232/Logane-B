import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavHomeComponent } from './nav-home/nav-home.component';
import { RouterLink } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    NavHomeComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    NgbModule
  ],
  exports: [NavHomeComponent]
})
export class NavigationModule { }
