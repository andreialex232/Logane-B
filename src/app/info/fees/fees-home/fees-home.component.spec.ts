import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesHomeComponent } from './fees-home.component';

describe('FeesHomeComponent', () => {
  let component: FeesHomeComponent;
  let fixture: ComponentFixture<FeesHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeesHomeComponent]
    });
    fixture = TestBed.createComponent(FeesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
