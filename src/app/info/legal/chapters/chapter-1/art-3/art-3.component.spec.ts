import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art3Component } from './art-3.component';

describe('Art3Component', () => {
  let component: Art3Component;
  let fixture: ComponentFixture<Art3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Art3Component]
    });
    fixture = TestBed.createComponent(Art3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
