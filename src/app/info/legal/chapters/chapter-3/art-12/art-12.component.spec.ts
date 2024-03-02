import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art12Component } from './art-12.component';

describe('Art12Component', () => {
  let component: Art12Component;
  let fixture: ComponentFixture<Art12Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Art12Component]
    });
    fixture = TestBed.createComponent(Art12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
