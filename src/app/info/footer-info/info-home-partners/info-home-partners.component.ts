import { Component } from '@angular/core';
import { INFO_ARTICLES_PARTNERS } from 'src/app/core/models/footer-models/partners.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-home-partners',
  templateUrl: './info-home-partners.html',
  styleUrls: ['./info-home-partners.scss']
})
export class PartnersComponent {

  parteners = INFO_ARTICLES_PARTNERS;

}
