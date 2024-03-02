import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art37Component } from './art-37.component';

describe('Art37Component', () => {
  let component: Art37Component;
  let fixture: ComponentFixture<Art37Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Art37Component]
    });
    fixture = TestBed.createComponent(Art37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
