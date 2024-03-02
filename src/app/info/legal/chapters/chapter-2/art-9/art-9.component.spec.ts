import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art9Component } from './art-9.component';

describe('Art9Component', () => {
  let component: Art9Component;
  let fixture: ComponentFixture<Art9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Art9Component]
    });
    fixture = TestBed.createComponent(Art9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
