import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art29Component } from './art-29.component';

describe('Art29Component', () => {
  let component: Art29Component;
  let fixture: ComponentFixture<Art29Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Art29Component]
    });
    fixture = TestBed.createComponent(Art29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
