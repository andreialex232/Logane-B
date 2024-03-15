import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCarDriverHomeComponent } from './personal-car-driver-home.component';

describe('PersonalCarDriverHomeComponent', () => {
  let component: PersonalCarDriverHomeComponent;
  let fixture: ComponentFixture<PersonalCarDriverHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalCarDriverHomeComponent]
    });
    fixture = TestBed.createComponent(PersonalCarDriverHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
