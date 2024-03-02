import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art27Component } from './art-27.component';

describe('Art27Component', () => {
  let component: Art27Component;
  let fixture: ComponentFixture<Art27Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Art27Component]
    });
    fixture = TestBed.createComponent(Art27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
