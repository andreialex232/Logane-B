import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art28Component } from './art-28.component';

describe('Art28Component', () => {
  let component: Art28Component;
  let fixture: ComponentFixture<Art28Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Art28Component]
    });
    fixture = TestBed.createComponent(Art28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
