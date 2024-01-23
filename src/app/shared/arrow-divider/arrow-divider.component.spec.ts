import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowDividerComponent } from './arrow-divider.component';

describe('ArrowDividerComponent', () => {
  let component: ArrowDividerComponent;
  let fixture: ComponentFixture<ArrowDividerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrowDividerComponent]
    });
    fixture = TestBed.createComponent(ArrowDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
