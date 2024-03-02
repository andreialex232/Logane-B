import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter6HomeComponent } from './chapter-6-home.component';

describe('Chapter6HomeComponent', () => {
  let component: Chapter6HomeComponent;
  let fixture: ComponentFixture<Chapter6HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Chapter6HomeComponent]
    });
    fixture = TestBed.createComponent(Chapter6HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
