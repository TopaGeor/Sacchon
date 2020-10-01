import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-put-patient-data',
  templateUrl: './put-patient-data.component.html',
  styleUrls: ['./put-patient-data.component.scss']
})

export class PutPatientDataComponent implements OnInit {
  form: FormGroup;
  patientId = this.route.snapshot.paramMap.get("patientId"); 
  dataId = this.route.snapshot.paramMap.get("dataId");
  bloodGlucose = this.route.snapshot.paramMap.get("bloodGlucose");
  carbIntake = this.route.snapshot.paramMap.get("carbIntake");

  constructor(
    private fb: FormBuilder,
    private service: PatientService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      bloodGlucose: [this.bloodGlucose, Validators.pattern('^[-+]?[0-9]*\.?[0-9]+$')],
      carbIntake: [this.carbIntake, Validators.pattern('^[-+]?[0-9]*\.?[0-9]+$')],
    });
  }

  onSubmit() { 
    this.service.putPatientData(this.patientId, this.dataId, this.form).subscribe(patientData => 
      {
        console.log(patientData);
        //this.ngOnInit();
      });
  }

}
