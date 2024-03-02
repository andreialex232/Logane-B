import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCarDriverComponent } from './personal-car-driver.component';

describe('PersonalCarDriverComponent', () => {
  let component: PersonalCarDriverComponent;
  let fixture: ComponentFixture<PersonalCarDriverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalCarDriverComponent]
    });
    fixture = TestBed.createComponent(PersonalCarDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
