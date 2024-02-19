import { Component } from '@angular/core';
import { TEL_NUMBER } from 'src/core/constants.models';

@Component({
  selector: 'app-contact-tel',
  templateUrl: './contact-tel.component.html',
  styleUrls: ['./contact-tel.component.scss'],
  standalone: true,
})
export class ContactTelComponent {

  public tel = TEL_NUMBER;

  constructor(){}
}
