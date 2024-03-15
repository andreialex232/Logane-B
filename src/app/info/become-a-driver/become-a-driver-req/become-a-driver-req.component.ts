import { Component } from '@angular/core';
import { DRIVER_REQUIREMENTS } from '../../../core/models/info-models/driver/driver-requirements.models';

@Component({
  selector: 'app-become-a-driver-req',
  templateUrl: './become-a-driver-req.component.html',
  styleUrls: ['./become-a-driver-req.component.scss']
})
export class BecomeADriverReqComponent {

  public driverRequirements = DRIVER_REQUIREMENTS;

}
