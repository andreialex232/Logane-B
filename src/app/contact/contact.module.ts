import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactHomeComponent } from './contact-home/contact-home.component';
import { FormComponent } from '../shared/form/form.component';
import { ContactTelComponent } from '../shared/contact-tel/contact-tel.component';



@NgModule({
  declarations: [
    ContactHomeComponent
  ],
  imports: [
    CommonModule,
    FormComponent,
    ContactTelComponent
  ]
})
export class ContactModule { }
