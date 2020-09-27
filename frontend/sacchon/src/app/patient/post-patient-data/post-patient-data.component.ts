import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-post-patient-data',
  templateUrl: './post-patient-data.component.html',
  styleUrls: ['./post-patient-data.component.scss']
})
export class PostPatientDataComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: PatientService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      bloodGlucose: [''],
      carbIntake: [''],
    });
  }

  clickOnSubmit() {
    this.service.postPatientData(this.form).subscribe(patientData => 
      {
        alert(JSON.stringify(patientData))
        this.ngOnInit();
      });
  }

}