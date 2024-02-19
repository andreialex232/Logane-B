import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { NgbDropdownModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { PhoneNumberService } from './services/phone-number.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CPM Rent Solutions';

  public tel = this.telSvc.tel;
  public isMenuCollapsed = true;
  public userOpenedMenu = false;

  constructor(private telSvc: PhoneNumberService){}

  onClickMenuItem() {
    this.isMenuCollapsed = true;
  }

  public toggleCollapse(){
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this.userOpenedMenu = true;
  }

}
