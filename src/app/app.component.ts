import { Component } from '@angular/core';
import { NgbDropdownModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { TEL_NUMBER } from 'src/core/constants.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CPM Rent Solutions';

  public tel = TEL_NUMBER;
  public isMenuCollapsed = true;
  public userOpenedMenu = false;

  constructor(){}

  onClickMenuItem() {
    this.isMenuCollapsed = true;
  }

  public toggleCollapse(){
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this.userOpenedMenu = true;
  }

}
