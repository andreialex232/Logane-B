import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalInfoComponent } from './info-home-legal-info';

describe('LegalInfoComponent', () => {
  let component: LegalInfoComponent;
  let fixture: ComponentFixture<LegalInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LegalInfoComponent]
    });
    fixture = TestBed.createComponent(LegalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
