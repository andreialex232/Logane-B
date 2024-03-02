import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art2Component } from './art-2.component';

describe('Art2Component', () => {
  let component: Art2Component;
  let fixture: ComponentFixture<Art2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Art2Component]
    });
    fixture = TestBed.createComponent(Art2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
