import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art11Component } from './art-11.component';

describe('Art11Component', () => {
  let component: Art11Component;
  let fixture: ComponentFixture<Art11Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Art11Component]
    });
    fixture = TestBed.createComponent(Art11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
