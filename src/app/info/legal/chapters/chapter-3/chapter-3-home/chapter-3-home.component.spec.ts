import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter3HomeComponent } from './chapter-3-home.component';

describe('Chapter3HomeComponent', () => {
  let component: Chapter3HomeComponent;
  let fixture: ComponentFixture<Chapter3HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Chapter3HomeComponent]
    });
    fixture = TestBed.createComponent(Chapter3HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
