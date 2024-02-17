import { Component } from '@angular/core';
import { NgbDropdownModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { PhoneNumberService } from './services/phone-number.service';

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

  onClickMenuItem() {
    this.isMenuCollapsed = true;
  }

  public toggleMobileMenu(){
    this.isMenuCollapsed = !this.isMenuCollapsed;

    const OPEN_MENU = document.getElementById('open-icon-container');
    const CLOSE_MENU = document.getElementById('close-icon-container');

    if(!this.isMenuCollapsed) {
      OPEN_MENU?.classList.remove('come-in-right');
      OPEN_MENU?.classList.add('exit-left');

      CLOSE_MENU?.classList.remove('opacity-0');
      CLOSE_MENU?.classList.remove('exit-left');
      CLOSE_MENU?.classList.add('come-in-right');
    } else {
      OPEN_MENU?.classList.remove('exit-left');
      OPEN_MENU?.classList.add('come-in-right');

      CLOSE_MENU?.classList.remove('come-in-right');
      CLOSE_MENU?.classList.add('exit-left');
    }
  }
}
