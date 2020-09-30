import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-post-consultation',
  templateUrl: './post-consultation.component.html',
  styleUrls: ['./post-consultation.component.scss']
})
export class PostConsultationComponent implements OnInit {
  form: FormGroup;
  patientId = this.route.snapshot.paramMap.get("patientId");
  doctorId = this.route.snapshot.paramMap.get("doctorId");

  constructor(
    private fb: FormBuilder,
    private service: DoctorService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      advice: [null, Validators.required]
    });

  }

  onSubmit() {
    this.service.postConsultation(this.doctorId, this.patientId, this.form).subscribe(consult => {
      console.log(consult);
    });
  }
}