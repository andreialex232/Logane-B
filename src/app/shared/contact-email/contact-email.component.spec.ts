import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactEmailComponent } from './contact-email.component';

describe('ContactEmailComponent', () => {
  let component: ContactEmailComponent;
  let fixture: ComponentFixture<ContactEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactEmailComponent]
    });
    fixture = TestBed.createComponent(ContactEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
