import { Component } from '@angular/core';
import { INFO_ARTICLES_LEGAL } from 'src/core/models/info-articles.models';

@Component({
  selector: 'app-footer-legal-info',
  templateUrl: './footer-legal-info.component.html',
  styleUrls: ['./footer-legal-info.component.scss']
})
export class FooterLegalInfoComponent {

  public legalInfoItems = INFO_ARTICLES_LEGAL;
}
