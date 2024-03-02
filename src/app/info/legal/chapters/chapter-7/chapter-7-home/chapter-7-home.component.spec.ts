import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter7HomeComponent } from './chapter-7-home.component';

describe('Chapter7HomeComponent', () => {
  let component: Chapter7HomeComponent;
  let fixture: ComponentFixture<Chapter7HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Chapter7HomeComponent]
    });
    fixture = TestBed.createComponent(Chapter7HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
