import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art14Component } from './art-14.component';

describe('Art14Component', () => {
  let component: Art14Component;
  let fixture: ComponentFixture<Art14Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Art14Component]
    });
    fixture = TestBed.createComponent(Art14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
