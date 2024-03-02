import { Component } from '@angular/core';
import { ART_24_MANDATORY_DOCS } from './art-24.models';

@Component({
  selector: 'app-art-24',
  templateUrl: './art-24.component.html',
  styleUrls: ['./art-24.component.scss']
})
export class Art24Component {

  public art24Docs = ART_24_MANDATORY_DOCS

}
