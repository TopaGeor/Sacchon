import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetPatientToDoctorComponent } from './set-patient-to-doctor.component';

describe('SetPatientToDoctorComponent', () => {
  let component: SetPatientToDoctorComponent;
  let fixture: ComponentFixture<SetPatientToDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetPatientToDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetPatientToDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
