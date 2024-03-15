import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCarDriverCarConditionComponent } from './personal-car-driver-car-condition.component';

describe('PersonalCarDriverCarConditionComponent', () => {
  let component: PersonalCarDriverCarConditionComponent;
  let fixture: ComponentFixture<PersonalCarDriverCarConditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalCarDriverCarConditionComponent]
    });
    fixture = TestBed.createComponent(PersonalCarDriverCarConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
