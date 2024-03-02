import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art31Component } from './art-31.component';

describe('Art31Component', () => {
  let component: Art31Component;
  let fixture: ComponentFixture<Art31Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Art31Component]
    });
    fixture = TestBed.createComponent(Art31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
