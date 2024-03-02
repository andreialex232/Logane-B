import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art8Component } from './art-8.component';

describe('Art8Component', () => {
  let component: Art8Component;
  let fixture: ComponentFixture<Art8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Art8Component]
    });
    fixture = TestBed.createComponent(Art8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
