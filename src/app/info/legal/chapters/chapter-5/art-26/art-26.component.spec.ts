import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art26Component } from './art-26.component';

describe('Art26Component', () => {
  let component: Art26Component;
  let fixture: ComponentFixture<Art26Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Art26Component]
    });
    fixture = TestBed.createComponent(Art26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
