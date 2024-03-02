import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art10Component } from './art-10.component';

describe('Art10Component', () => {
  let component: Art10Component;
  let fixture: ComponentFixture<Art10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Art10Component]
    });
    fixture = TestBed.createComponent(Art10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
