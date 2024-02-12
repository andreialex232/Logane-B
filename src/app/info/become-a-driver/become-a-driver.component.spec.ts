import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeADriverComponent } from './become-a-driver.component';

describe('BecomeADriverComponent', () => {
  let component: BecomeADriverComponent;
  let fixture: ComponentFixture<BecomeADriverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BecomeADriverComponent]
    });
    fixture = TestBed.createComponent(BecomeADriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
