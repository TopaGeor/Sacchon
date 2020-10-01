import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChiefDoctorService } from '../chief-doctor.service';

@Component({
  selector: 'app-no-act-user',
  templateUrl: './no-act-user.component.html',
  styleUrls: ['./no-act-user.component.scss']
})
export class NoActUserComponent implements OnInit {
  nonActiveUser;
  form: FormGroup;
  //userId = ['patient', 'doctor'];

  constructor(
    private fb: FormBuilder,
    private service: ChiefDoctorService
    ) {}

  ngOnInit() {
    this.form = this.fb.group({
      from: [null, [Validators.required, Validators.minLength(3)]],
      to: [null, Validators.required],
      who: "doctor",
    });
    
    // this.form.get('userId').valueChanges.subscribe(value => {

    //   const nonActive = this.form.get('who');

    //   if (value === 'patient') {
    //     nonActive.setValidators(Validators.required);
    //   } else {
    //     nonActive.clearValidators();
    //   }
    //   nonActive.updateValueAndValidity();
    // });
  }

  onSubmit() {
    this.service.nonActivePatients(this.form.value).subscribe(patientData => 
      {
        console.log(patientData);
        //this.ngOnInit();
      });
  }
}
