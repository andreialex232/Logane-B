import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeADriverReqComponent } from './become-a-driver-req.component';

describe('BecomeADriverReqComponent', () => {
  let component: BecomeADriverReqComponent;
  let fixture: ComponentFixture<BecomeADriverReqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BecomeADriverReqComponent]
    });
    fixture = TestBed.createComponent(BecomeADriverReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
