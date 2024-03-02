import { Component } from '@angular/core';
import { ART_28_DRIVER_OBLIGATIONS } from './art-28.models';

@Component({
  selector: 'app-art-28',
  templateUrl: './art-28.component.html',
  styleUrls: ['./art-28.component.scss']
})
export class Art28Component {

  public art28DriverObl = ART_28_DRIVER_OBLIGATIONS;

}
