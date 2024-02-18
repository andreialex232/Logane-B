import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInfoComponent } from './info-home-general-info';

describe('GeneralInfoComponent', () => {
  let component: GeneralInfoComponent;
  let fixture: ComponentFixture<GeneralInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralInfoComponent]
    });
    fixture = TestBed.createComponent(GeneralInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
