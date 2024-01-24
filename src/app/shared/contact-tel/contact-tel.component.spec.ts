import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactTelComponent } from './contact-tel.component';

describe('ContactTelComponent', () => {
  let component: ContactTelComponent;
  let fixture: ComponentFixture<ContactTelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactTelComponent]
    });
    fixture = TestBed.createComponent(ContactTelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
