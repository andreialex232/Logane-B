import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art36Component } from './art-36.component';

describe('Art36Component', () => {
  let component: Art36Component;
  let fixture: ComponentFixture<Art36Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Art36Component]
    });
    fixture = TestBed.createComponent(Art36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
