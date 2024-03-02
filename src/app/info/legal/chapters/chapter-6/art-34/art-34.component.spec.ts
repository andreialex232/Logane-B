import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art34Component } from './art-34.component';

describe('Art34Component', () => {
  let component: Art34Component;
  let fixture: ComponentFixture<Art34Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Art34Component]
    });
    fixture = TestBed.createComponent(Art34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
