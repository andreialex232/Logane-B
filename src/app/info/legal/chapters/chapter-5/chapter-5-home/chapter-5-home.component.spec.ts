import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter5HomeComponent } from './chapter-5-home.component';

describe('Chapter5HomeComponent', () => {
  let component: Chapter5HomeComponent;
  let fixture: ComponentFixture<Chapter5HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Chapter5HomeComponent]
    });
    fixture = TestBed.createComponent(Chapter5HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
