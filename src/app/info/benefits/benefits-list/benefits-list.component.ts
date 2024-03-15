import { Component } from '@angular/core';
import { BENEFITS } from 'src/app/core/models/info-models/benefits/benefits.models';

@Component({
  selector: 'app-benefits-list',
  templateUrl: './benefits-list.component.html',
  styleUrls: ['./benefits-list.component.scss']
})
export class BenefitsListComponent {

  public benefitList = BENEFITS
  
}
