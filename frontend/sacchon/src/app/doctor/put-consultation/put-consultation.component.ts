import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-put-consultation',
  templateUrl: './put-consultation.component.html',
  styleUrls: ['./put-consultation.component.scss']
})
export class PutConsultationComponent implements OnInit {
  form: FormGroup;
  doctorId = this.route.snapshot.paramMap.get("doctorId");
  patientId = this.route.snapshot.paramMap.get("patientId");  
  consId = this.route.snapshot.paramMap.get("consId");
  advice = this.route.snapshot.paramMap.get("advice");

  constructor(
    private fb: FormBuilder,
    private service: DoctorService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      advice: [this.advice, Validators.required]
    });
  }

  onSubmit() {
    this.service.putConsultation(this.doctorId, this.patientId, this.consId, this.form).subscribe(consul => {
      console.log(consul);
    });
  }
}
