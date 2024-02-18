import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterGeneralInfoComponent } from './footer-general-info.component';

describe('FooterGeneralInfoComponent', () => {
  let component: FooterGeneralInfoComponent;
  let fixture: ComponentFixture<FooterGeneralInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterGeneralInfoComponent]
    });
    fixture = TestBed.createComponent(FooterGeneralInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
