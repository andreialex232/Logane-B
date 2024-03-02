import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art4Component } from './art-4.component';

describe('Art4Component', () => {
  let component: Art4Component;
  let fixture: ComponentFixture<Art4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Art4Component]
    });
    fixture = TestBed.createComponent(Art4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
