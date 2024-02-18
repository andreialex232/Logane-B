import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterNavLinksComponent } from './footer-nav-links.component';

describe('FooterNavLinksComponent', () => {
  let component: FooterNavLinksComponent;
  let fixture: ComponentFixture<FooterNavLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterNavLinksComponent]
    });
    fixture = TestBed.createComponent(FooterNavLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
