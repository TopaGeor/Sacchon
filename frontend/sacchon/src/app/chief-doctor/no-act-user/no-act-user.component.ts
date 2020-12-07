import { Component, OnInit } from '@angular/core';
import { ChiefDoctorService } from '../chief-doctor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-no-act-user',
  templateUrl: './no-act-user.component.html',
  styleUrls: ['./no-act-user.component.scss']
})
export class NoActUserComponent implements OnInit {
  nonActivePatient;
  nonActiveDoctor;
  doctorForm: FormGroup;
  patientForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: ChiefDoctorService
    ) {}

  ngOnInit() {
    this.doctorForm = this.fb.group({
      from: '2020-09-01',
      to: '2020-10-02',
      who: 'doctor'
    });


    this.patientForm = this.fb.group({
      from: '2020-09-01',
      to: '2020-10-02',
      who: 'patient'
    });

    this.service.nonActiveDoctor(this.doctorForm.value).subscribe(nonActiveDoctor => {
      this.nonActiveDoctor = nonActiveDoctor;
      console.log(nonActiveDoctor);
    });
    
    this.service.nonActivePatients(this.patientForm.value).subscribe(nonActivePatient => {
      this.nonActivePatient = nonActivePatient;
      console.log(nonActivePatient);
    });
  }
}
