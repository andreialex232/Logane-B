import { Component } from '@angular/core';
import { FOOTER_NAV_LINKS } from '../../core/models/footer-models/footer-nav-models';

@Component({
  selector: 'app-footer-nav-links',
  templateUrl: './footer-nav-links.component.html',
  styleUrls: ['./footer-nav-links.component.scss']
})
export class FooterNavLinksComponent {

  public footerNavLinks = FOOTER_NAV_LINKS;
}
