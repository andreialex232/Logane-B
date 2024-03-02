import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art16Component } from './art-16.component';

describe('Art16Component', () => {
  let component: Art16Component;
  let fixture: ComponentFixture<Art16Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Art16Component]
    });
    fixture = TestBed.createComponent(Art16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
