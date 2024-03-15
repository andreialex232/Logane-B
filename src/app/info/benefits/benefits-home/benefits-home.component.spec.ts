import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsHomeComponent } from './benefits-home.component';

describe('BenefitsHomeComponent', () => {
  let component: BenefitsHomeComponent;
  let fixture: ComponentFixture<BenefitsHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BenefitsHomeComponent]
    });
    fixture = TestBed.createComponent(BenefitsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
