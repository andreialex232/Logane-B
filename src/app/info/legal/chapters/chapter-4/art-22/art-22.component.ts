import { Component } from '@angular/core';
import { ART_22_STICKER } from './art-22.models';

@Component({
  selector: 'app-art-22',
  templateUrl: './art-22.component.html',
  styleUrls: ['./art-22.component.scss']
})
export class Art22Component {

  public art22Stickers = ART_22_STICKER;

}
