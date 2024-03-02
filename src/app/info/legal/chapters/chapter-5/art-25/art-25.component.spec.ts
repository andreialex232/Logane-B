import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art25Component } from './art-25.component';

describe('Art25Component', () => {
  let component: Art25Component;
  let fixture: ComponentFixture<Art25Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Art25Component]
    });
    fixture = TestBed.createComponent(Art25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
