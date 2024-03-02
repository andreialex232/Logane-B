import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art20Component } from './art-20.component';

describe('Art20Component', () => {
  let component: Art20Component;
  let fixture: ComponentFixture<Art20Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Art20Component]
    });
    fixture = TestBed.createComponent(Art20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
