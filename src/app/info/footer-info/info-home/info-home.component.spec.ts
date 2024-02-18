import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterInfoHomeComponent } from './info-home.component';

describe('FooterInfoHomeComponent', () => {
  let component: FooterInfoHomeComponent;
  let fixture: ComponentFixture<FooterInfoHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterInfoHomeComponent]
    });
    fixture = TestBed.createComponent(FooterInfoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
