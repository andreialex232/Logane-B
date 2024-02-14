import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactHomeComponent } from './contact-home/contact-home.component';
import { FormComponent } from '../shared/form/form.component';
import { ContactTelComponent } from '../shared/contact-tel/contact-tel.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';



@NgModule({
  declarations: [
    ContactHomeComponent,
    ContactInformationComponent
  ],
  imports: [
    CommonModule,
    FormComponent,
    ContactTelComponent
  ]
})
export class ContactModule { }
