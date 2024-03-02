import { Component } from '@angular/core';
import { ART_16_SUSPEND, ART_16_WITHDRAWAL } from './art-16.models';

@Component({
  selector: 'app-art-16',
  templateUrl: './art-16.component.html',
  styleUrls: ['./art-16.component.scss']
})
export class Art16Component {

  public art16Suspend = ART_16_SUSPEND;
  public art16Wd = ART_16_WITHDRAWAL;
  

}
