import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art32Component } from './art-32.component';

describe('Art32Component', () => {
  let component: Art32Component;
  let fixture: ComponentFixture<Art32Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Art32Component]
    });
    fixture = TestBed.createComponent(Art32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
