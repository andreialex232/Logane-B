import { Component } from '@angular/core';
import { INFO_ARTICLES_GENERAL } from 'src/app/core/models/footer-models/info-articles.models';

@Component({
  selector: 'app-info-home-general-info',
  templateUrl: './info-home-general-info.html',
  styleUrls: ['./info-home-general-info.scss']
})
export class GeneralInfoComponent {

  public generalInformationItems = INFO_ARTICLES_GENERAL;

}
