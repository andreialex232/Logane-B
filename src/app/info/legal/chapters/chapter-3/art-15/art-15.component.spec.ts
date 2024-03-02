import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art15Component } from './art-15.component';

describe('Art15Component', () => {
  let component: Art15Component;
  let fixture: ComponentFixture<Art15Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Art15Component]
    });
    fixture = TestBed.createComponent(Art15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
