import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutroComponent } from './outro.component';

describe('OutroComponent', () => {
  let component: OutroComponent;
  let fixture: ComponentFixture<OutroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutroComponent]
    });
    fixture = TestBed.createComponent(OutroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
