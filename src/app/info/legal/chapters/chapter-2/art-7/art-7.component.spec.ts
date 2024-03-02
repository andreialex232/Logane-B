import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art7Component } from './art-7.component';

describe('Art7Component', () => {
  let component: Art7Component;
  let fixture: ComponentFixture<Art7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Art7Component]
    });
    fixture = TestBed.createComponent(Art7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
