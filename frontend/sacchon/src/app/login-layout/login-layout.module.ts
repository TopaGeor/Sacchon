import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';



@NgModule({
  declarations: [PatientLoginComponent, DoctorLoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class LoginLayoutModule { }