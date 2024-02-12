import { Component } from '@angular/core';
import { NgbDropdownModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { PhoneNumberService } from './shared/services/phone-number/phone-number.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LoganeB';

  public tel = this.telSvc.tel;
  public isMenuCollapsed = true;

  constructor(private telSvc: PhoneNumberService){}
}
