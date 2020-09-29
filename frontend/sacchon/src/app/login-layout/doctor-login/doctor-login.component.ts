import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from 'src/app/doctor/doctor.service';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.scss']
})
export class DoctorLoginComponent implements OnInit {
  form: FormGroup;
  doctor;
  id =  this.route.snapshot.paramMap.get("id");

  constructor(
    private fb: FormBuilder,
    private service: DoctorService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  onSubmit() {
    this.service.getDoctorDetails(this.id).subscribe(doctor => {
      this.doctor = doctor;
      console.log(doctor);
    })
  }
}
