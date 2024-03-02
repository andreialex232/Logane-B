import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art30Component } from './art-30.component';

describe('Art30Component', () => {
  let component: Art30Component;
  let fixture: ComponentFixture<Art30Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Art30Component]
    });
    fixture = TestBed.createComponent(Art30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
