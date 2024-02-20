import { Component } from '@angular/core';
import { IArticles, INFO_ARTICLES_GENERAL } from 'src/core/models/info-articles.models';

@Component({
  selector: 'app-info-home-general-info',
  templateUrl: './info-home-general-info.html',
  styleUrls: ['./info-home-general-info.scss']
})
export class GeneralInfoComponent {

  public generalInformationItems: IArticles[] = INFO_ARTICLES_GENERAL;

}
