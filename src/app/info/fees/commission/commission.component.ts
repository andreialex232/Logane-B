import { Component } from '@angular/core';
import { COMMISSION } from 'src/app/core/models/info-models/fees-models/commission.models';

@Component({
  selector: 'app-commission',
  templateUrl: './commission.component.html',
  styleUrls: ['./commission.component.scss']
})
export class CommissionComponent {

  public commission = COMMISSION;
  
}
