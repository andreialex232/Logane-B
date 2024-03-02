import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art21Component } from './art-21.component';

describe('Art21Component', () => {
  let component: Art21Component;
  let fixture: ComponentFixture<Art21Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Art21Component]
    });
    fixture = TestBed.createComponent(Art21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
