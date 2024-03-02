import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art1Component } from './art-1.component';

describe('Art1Component', () => {
  let component: Art1Component;
  let fixture: ComponentFixture<Art1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Art1Component]
    });
    fixture = TestBed.createComponent(Art1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
