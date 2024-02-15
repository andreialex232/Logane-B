import { Component } from '@angular/core';
import { IInfoArticles, INFO_ARTICLES_LEGAL } from '../footer-info.models';

@Component({
  selector: 'app-legal-info',
  templateUrl: './legal-info.component.html',
  styleUrls: ['./legal-info.component.scss']
})
export class LegalInfoComponent {

  legalInformationItems: IInfoArticles[] = INFO_ARTICLES_LEGAL;

}
