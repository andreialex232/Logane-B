import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art39Component } from './art-39.component';

describe('Art39Component', () => {
  let component: Art39Component;
  let fixture: ComponentFixture<Art39Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Art39Component]
    });
    fixture = TestBed.createComponent(Art39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
