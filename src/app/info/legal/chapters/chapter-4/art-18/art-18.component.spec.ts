import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art18Component } from './art-18.component';

describe('Art18Component', () => {
  let component: Art18Component;
  let fixture: ComponentFixture<Art18Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Art18Component]
    });
    fixture = TestBed.createComponent(Art18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
