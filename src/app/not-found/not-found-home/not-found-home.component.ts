import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found-home',
  templateUrl: './not-found-home.component.html',
  styleUrls: ['./not-found-home.component.scss']
})
export class NotFoundHomeComponent {

constructor(private router: Router){}

public navigateByUrl(url: string){
  this.router.navigateByUrl(url)
}

}
