import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art13Component } from './art-13.component';

describe('Art13Component', () => {
  let component: Art13Component;
  let fixture: ComponentFixture<Art13Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Art13Component]
    });
    fixture = TestBed.createComponent(Art13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
