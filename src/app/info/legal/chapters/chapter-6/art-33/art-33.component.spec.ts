import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art33Component } from './art-33.component';

describe('Art33Component', () => {
  let component: Art33Component;
  let fixture: ComponentFixture<Art33Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Art33Component]
    });
    fixture = TestBed.createComponent(Art33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
