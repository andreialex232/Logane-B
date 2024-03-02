import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art22Component } from './art-22.component';

describe('Art22Component', () => {
  let component: Art22Component;
  let fixture: ComponentFixture<Art22Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Art22Component]
    });
    fixture = TestBed.createComponent(Art22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
