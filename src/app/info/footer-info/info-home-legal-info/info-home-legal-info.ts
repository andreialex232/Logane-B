import { Component } from '@angular/core';
import { INFO_ARTICLES_LEGAL } from 'src/app/core/models/footer-models/info-articles.models';

@Component({
  selector: 'app-info-home-legal-info',
  templateUrl: './info-home-legal-info.html',
  styleUrls: ['./info-home-legal-info.scss']
})
export class LegalInfoComponent {

  public legalInformationItems = INFO_ARTICLES_LEGAL;

}
