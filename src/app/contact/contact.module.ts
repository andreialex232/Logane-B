import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactHomeComponent } from './contact-home/contact-home.component';
import { SendEmailFormComponent } from '../shared/send-email-form/send-email-form.component';
import { ContactTelComponent } from '../shared/contact-tel/contact-tel.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';



@NgModule({
  declarations: [
    ContactHomeComponent,
    ContactInformationComponent
  ],
  imports: [
    CommonModule,
    SendEmailFormComponent,
    ContactTelComponent
  ]
})
export class ContactModule { }
