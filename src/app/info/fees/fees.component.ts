import { Component } from '@angular/core';
import { COMMISSION } from 'src/app/core/models/info-models/fees-models/commission.models';
import { COST } from 'src/app/core/models/info-models/fees-models/expenditure.models';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.scss']
})
export class FeesComponent {

  public outgoings = COST;
  public commission = COMMISSION;

}
