import { Component } from '@angular/core';
import { IInfoArticles, INFO_ARTICLES_PARTNERS } from '../footer-info.models';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent {

  parteners: IInfoArticles[] = INFO_ARTICLES_PARTNERS;

}
