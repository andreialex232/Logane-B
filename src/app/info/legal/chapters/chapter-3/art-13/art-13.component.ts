import { Component } from '@angular/core';
import { ART_13_LEGAL_AUTH, ART_13_REPLACE, ART_13_RIGHTS } from './art-13.models';

@Component({
  selector: 'app-art-13',
  templateUrl: './art-13.component.html',
  styleUrls: ['./art-13.component.scss']
})
export class Art13Component {

  public art13Auth = ART_13_LEGAL_AUTH;
  public art13Rights = ART_13_RIGHTS;
  public art13Replace = ART_13_REPLACE;
}
