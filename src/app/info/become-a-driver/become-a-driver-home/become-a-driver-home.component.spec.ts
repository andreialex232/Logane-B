import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeADriverHomeComponent } from './become-a-driver-home.component';

describe('BecomeADriverHomeComponent', () => {
  let component: BecomeADriverHomeComponent;
  let fixture: ComponentFixture<BecomeADriverHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BecomeADriverHomeComponent]
    });
    fixture = TestBed.createComponent(BecomeADriverHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
