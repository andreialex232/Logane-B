import { Component } from '@angular/core';
import { ART_25_DIGITAL_REQ } from './art-25.models';

@Component({
  selector: 'app-art-25',
  templateUrl: './art-25.component.html',
  styleUrls: ['./art-25.component.scss']
})
export class Art25Component {

  public Art25DigitalOpReq = ART_25_DIGITAL_REQ;
  
}
