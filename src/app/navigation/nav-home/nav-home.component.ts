import { Component } from '@angular/core';
import { TEL_NUMBER } from 'src/core/constants/tel-number.constants';

@Component({
  selector: 'app-nav-home',
  templateUrl: './nav-home.component.html',
  styleUrls: ['./nav-home.component.scss']
})
export class NavHomeComponent {

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
