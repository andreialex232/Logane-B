import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art6Component } from './art-6.component';

describe('Art6Component', () => {
  let component: Art6Component;
  let fixture: ComponentFixture<Art6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Art6Component]
    });
    fixture = TestBed.createComponent(Art6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
