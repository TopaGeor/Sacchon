import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { ChiefDoctorLoginComponent } from './chief-doctor-login/chief-doctor-login.component';

import { PatientLoginComponent } from './patient-login/patient-login.component';
import { LandpageComponent } from './landpage/landpage.component';


@NgModule({
  declarations: [PatientLoginComponent, DoctorLoginComponent, ChiefDoctorLoginComponent, LandpageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class LoginLayoutModule { }
