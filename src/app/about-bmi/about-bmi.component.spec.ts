import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBmiComponent } from './about-bmi.component';

describe('AboutBmiComponent', () => {
  let component: AboutBmiComponent;
  let fixture: ComponentFixture<AboutBmiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutBmiComponent]
    });
    fixture = TestBed.createComponent(AboutBmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
