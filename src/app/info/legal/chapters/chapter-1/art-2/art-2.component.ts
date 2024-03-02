import { Component } from '@angular/core';
import { ART_2_TERMS } from './art-2.models';

@Component({
  selector: 'app-art-2',
  templateUrl: './art-2.component.html',
  styleUrls: ['./art-2.component.scss']
})
export class Art2Component {
  public art2Terms = ART_2_TERMS
}
