import { Component } from '@angular/core';
import { IAboutUsFeatures, ABOUT_US_FEATURES } from './about-us-features.models';

@Component({
  selector: 'app-about-us-features',
  templateUrl: './about-us-features.component.html',
  styleUrls: ['./about-us-features.component.scss']
})
export class AboutUsFeaturesComponent {

  aboutUsFeatures: IAboutUsFeatures[] = ABOUT_US_FEATURES;

}
