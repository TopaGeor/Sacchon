import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-post-patient-data',
  templateUrl: './post-patient-data.component.html',
  styleUrls: ['./post-patient-data.component.scss']
})
export class PostPatientDataComponent implements OnInit {
  form: FormGroup;
  id = this.route.snapshot.paramMap.get("id"); 

  constructor(
    private fb: FormBuilder,
    private service: PatientService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      bloodGlucose: [null, [Validators.required, Validators.pattern('^[-+]?[0-9]*\.?[0-9]+$')]],
      carbIntake: [null, [Validators.required, Validators.pattern("^[-+]?[0-9]*\.?[0-9]+$")]],
    });
  }

  onSubmit() {
    this.service.postPatientData(this.id, this.form).subscribe(patientData => 
      {
        console.log(patientData);
        //this.ngOnInit();
      });
  }

}