import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowDividerAnimatedComponent } from './arrow-divider-animated.component';

describe('ArrowDividerAnimatedComponent', () => {
  let component: ArrowDividerAnimatedComponent;
  let fixture: ComponentFixture<ArrowDividerAnimatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrowDividerAnimatedComponent]
    });
    fixture = TestBed.createComponent(ArrowDividerAnimatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
