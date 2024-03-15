import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCarDriverRequirementsComponent } from './personal-car-driver-requirements.component';

describe('PersonalCarDriverRequirementsComponent', () => {
  let component: PersonalCarDriverRequirementsComponent;
  let fixture: ComponentFixture<PersonalCarDriverRequirementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalCarDriverRequirementsComponent]
    });
    fixture = TestBed.createComponent(PersonalCarDriverRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
