import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLegalInfoComponent } from './footer-legal-info.component';

describe('FooterLegalInfoComponent', () => {
  let component: FooterLegalInfoComponent;
  let fixture: ComponentFixture<FooterLegalInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterLegalInfoComponent]
    });
    fixture = TestBed.createComponent(FooterLegalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
