import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art38Component } from './art-38.component';

describe('Art38Component', () => {
  let component: Art38Component;
  let fixture: ComponentFixture<Art38Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Art38Component]
    });
    fixture = TestBed.createComponent(Art38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
