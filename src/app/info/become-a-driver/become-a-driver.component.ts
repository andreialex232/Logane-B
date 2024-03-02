import { Component } from '@angular/core';
import { DRIVER_REQUIREMENTS } from './driver-requirements.models';

@Component({
  selector: 'app-become-a-driver',
  templateUrl: './become-a-driver.component.html',
  styleUrls: ['./become-a-driver.component.scss'],
})
export class BecomeADriverComponent {

  public driverRequirements = DRIVER_REQUIREMENTS;

}
