import { Component } from '@angular/core';
import { CAR_CONDITION_REQUIREMENTS, PERSONAL_VEHICLE_REQUIREMENTS } from './personal-car-requirements.models';

@Component({
  selector: 'app-personal-car-driver',
  templateUrl: './personal-car-driver.component.html',
  styleUrls: ['./personal-car-driver.component.scss']
})
export class PersonalCarDriverComponent {

  public carRequirements = PERSONAL_VEHICLE_REQUIREMENTS;
  public carConditionReq = CAR_CONDITION_REQUIREMENTS;

}

