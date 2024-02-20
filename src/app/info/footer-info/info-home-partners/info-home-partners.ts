import { Component } from '@angular/core';
import { IArticles, INFO_ARTICLES_PARTNERS } from 'src/core/models/info-articles.models';

@Component({
  selector: 'app-info-home-partners',
  templateUrl: './info-home-partners.html',
  styleUrls: ['./info-home-partners.scss']
})
export class PartnersComponent {

  parteners: IArticles[] = INFO_ARTICLES_PARTNERS;

}
