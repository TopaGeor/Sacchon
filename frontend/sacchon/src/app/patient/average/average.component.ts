import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-average',
  templateUrl: './average.component.html',
  styleUrls: ['./average.component.scss']
})
export class AverageComponent implements OnInit {
  patientDataAverage;
  patientId =  this.route.snapshot.paramMap.get("patientId");
  form: FormGroup;
  id = this.route.snapshot.paramMap.get("id"); 

  constructor(
    private fb: FormBuilder,
    private service: PatientService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      from: [null, [Validators.required, Validators.pattern('^(19[5-9][0-9]|20[0-4][0-9]|2050)[-/](0?[1-9]|1[0-2])[-/](0?[1-9]|[12][0-9]|3[01])$')]],
      to: [null, [Validators.required, Validators.pattern('^(19[5-9][0-9]|20[0-4][0-9]|2050)[-/](0?[1-9]|1[0-2])[-/](0?[1-9]|[12][0-9]|3[01])$')]],
    });
  }
  
  onSubmit() { 
    this.service.getPatientsDataAverage(this.patientId, this.form.value).subscribe(
      patientDataAverage => {this.patientDataAverage = patientDataAverage;
      console.log(patientDataAverage);
      console.log(this.form)
    })
  }

}
