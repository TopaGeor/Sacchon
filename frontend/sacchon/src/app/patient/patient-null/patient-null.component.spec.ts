import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientNullComponent } from './patient-null.component';

describe('PatientNullComponent', () => {
  let component: PatientNullComponent;
  let fixture: ComponentFixture<PatientNullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientNullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientNullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
