import { Component } from '@angular/core';
import { CAR_CONDITION_REQUIREMENTS } from '../../../core/models/info-models/personal-car-driver/personal-car-requirements.models';

@Component({
  selector: 'app-personal-car-driver-car-condition',
  templateUrl: './personal-car-driver-car-condition.component.html',
  styleUrls: ['./personal-car-driver-car-condition.component.scss']
})
export class PersonalCarDriverCarConditionComponent {
  
  public carConditionReq = CAR_CONDITION_REQUIREMENTS;

}
