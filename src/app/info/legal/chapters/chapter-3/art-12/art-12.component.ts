import { Component } from '@angular/core';
import { ART_12_ARTICLES, ART_12_INFR } from './art-12.models';

@Component({
  selector: 'app-art-12',
  templateUrl: './art-12.component.html',
  styleUrls: ['./art-12.component.scss']
})
export class Art12Component {

  public art12Art = ART_12_ARTICLES;
  public art12Infr = ART_12_INFR;
  public lastItem = 'F'

}
