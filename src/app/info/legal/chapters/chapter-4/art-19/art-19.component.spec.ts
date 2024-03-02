import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art19Component } from './art-19.component';

describe('Art19Component', () => {
  let component: Art19Component;
  let fixture: ComponentFixture<Art19Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Art19Component]
    });
    fixture = TestBed.createComponent(Art19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
