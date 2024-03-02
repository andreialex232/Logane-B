import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art35Component } from './art-35.component';

describe('Art35Component', () => {
  let component: Art35Component;
  let fixture: ComponentFixture<Art35Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Art35Component]
    });
    fixture = TestBed.createComponent(Art35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
