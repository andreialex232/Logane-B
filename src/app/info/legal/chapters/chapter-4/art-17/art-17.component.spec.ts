import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art17Component } from './art-17.component';

describe('Art17Component', () => {
  let component: Art17Component;
  let fixture: ComponentFixture<Art17Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Art17Component]
    });
    fixture = TestBed.createComponent(Art17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
