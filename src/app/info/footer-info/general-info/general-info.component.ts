import { Component } from '@angular/core';
import { IInfoArticles, INFO_ARTICLES_GENERAL } from '../footer-info.models';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent {

  generalInformationItems: IInfoArticles[] = INFO_ARTICLES_GENERAL;

}
