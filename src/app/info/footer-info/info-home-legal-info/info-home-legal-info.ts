import { Component } from '@angular/core';
import { IArticles, INFO_ARTICLES_LEGAL } from 'src/core/articles.models';

@Component({
  selector: 'app-info-home-legal-info',
  templateUrl: './info-home-legal-info.html',
  styleUrls: ['./info-home-legal-info.scss']
})
export class LegalInfoComponent {

  public legalInformationItems: IArticles[] = INFO_ARTICLES_LEGAL;

}
