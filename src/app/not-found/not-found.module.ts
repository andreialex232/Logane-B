import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundHomeComponent } from './not-found-home/not-found-home.component';
import { RouterLink } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    NotFoundHomeComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
  ]
})
export class NotFoundModule { }
