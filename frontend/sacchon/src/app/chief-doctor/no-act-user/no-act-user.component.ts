import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ChiefDoctorService } from '../chief-doctor.service';

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
  username = this.route.snapshot.paramMap.get("username");
  id = this.route.snapshot.paramMap.get("id");

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
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
    }    
    
    // this.service.nonActivePatients(this.patientForm.value).subscribe(nonActivePatient => {
    //   this.nonActivePatient = nonActivePatient;
    //   console.log(nonActivePatient);
    // }
  );
  }

}
