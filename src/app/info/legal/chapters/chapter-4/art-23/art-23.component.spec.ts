import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art23Component } from './art-23.component';

describe('Art23Component', () => {
  let component: Art23Component;
  let fixture: ComponentFixture<Art23Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Art23Component]
    });
    fixture = TestBed.createComponent(Art23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
