import { Component } from '@angular/core';
import { ART_15_WITHDRAWAL } from './art-15.models';

@Component({
  selector: 'app-art-15',
  templateUrl: './art-15.component.html',
  styleUrls: ['./art-15.component.scss']
})
export class Art15Component {

  public art15Wd = ART_15_WITHDRAWAL;

}
