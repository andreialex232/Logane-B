import { Component } from '@angular/core';
import { PERSONAL_VEHICLE_REQUIREMENTS } from '../../../core/models/info-models/personal-car-driver/personal-car-requirements.models';

@Component({
  selector: 'app-personal-car-driver-requirements',
  templateUrl: './personal-car-driver-requirements.component.html',
  styleUrls: ['./personal-car-driver-requirements.component.scss']
})
export class PersonalCarDriverRequirementsComponent {

  public personalCarDriverRequirements = PERSONAL_VEHICLE_REQUIREMENTS;

}
