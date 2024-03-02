import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art24Component } from './art-24.component';

describe('Art24Component', () => {
  let component: Art24Component;
  let fixture: ComponentFixture<Art24Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Art24Component]
    });
    fixture = TestBed.createComponent(Art24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
