import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter2HomeComponent } from './chapter-2-home.component';

describe('Chapter2HomeComponent', () => {
  let component: Chapter2HomeComponent;
  let fixture: ComponentFixture<Chapter2HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Chapter2HomeComponent]
    });
    fixture = TestBed.createComponent(Chapter2HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
