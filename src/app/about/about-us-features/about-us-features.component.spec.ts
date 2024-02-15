import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsFeaturesComponent } from './about-us-features.component';

describe('AboutUsFeaturesComponent', () => {
  let component: AboutUsFeaturesComponent;
  let fixture: ComponentFixture<AboutUsFeaturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsFeaturesComponent]
    });
    fixture = TestBed.createComponent(AboutUsFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
