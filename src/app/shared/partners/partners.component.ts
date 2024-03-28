import { Component } from '@angular/core';
import { INFO_ARTICLES_PARTNERS } from 'src/app/core/models/footer-models/partners.models';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
  standalone: true,
  imports: [NgFor]
})
export class PartnersComponent {

  parteners = INFO_ARTICLES_PARTNERS;
  
}
