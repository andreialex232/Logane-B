import { Component } from '@angular/core';
import { COST } from 'src/app/core/models/info-models/fees-models/expenditure.models';

@Component({
  selector: 'app-expenditures',
  templateUrl: './expenditures.component.html',
  styleUrls: ['./expenditures.component.scss']
})
export class ExpendituresComponent {

  public outgoings = COST;
  
}

