import { Component } from '@angular/core';
import { TEL_NUMBER } from 'src/app/core/constants/tel-number.constants';
import { INavDropdownItems } from 'src/app/core/models/nav-models/nav-items.models';

@Component({
  selector: 'app-nav-home',
  templateUrl: './nav-home.component.html',
  styleUrls: ['./nav-home.component.scss']
})
export class NavHomeComponent {

  public tel = TEL_NUMBER;
  public isMenuCollapsed = true;
  public userOpenedMenu = false;
  public dropdownItems = INavDropdownItems;
  public infoCollapse = true;

  constructor(){}

  onClickMenuItem() {
    this.isMenuCollapsed = true;
  }

  public toggleCollapse(){
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this.userOpenedMenu = true;
  }

  public mobileInfoCollapse() {
    this.infoCollapse = !this.infoCollapse;
  }
}
