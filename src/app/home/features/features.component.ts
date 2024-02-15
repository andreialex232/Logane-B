import { Component } from '@angular/core';
import { FEATURES, IFeature } from './features.models';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {

  features: IFeature[] = FEATURES;
  
}
