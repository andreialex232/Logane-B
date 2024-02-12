import { Component } from '@angular/core';
import { PhoneNumberService } from 'src/app/shared/services/phone-number/phone-number.service';

@Component({
  selector: 'app-contact-tel',
  templateUrl: './contact-tel.component.html',
  styleUrls: ['./contact-tel.component.scss'],
  standalone: true,
})
export class ContactTelComponent {

  public tel = this.telSvc.tel;

  constructor(private telSvc: PhoneNumberService){}
}
