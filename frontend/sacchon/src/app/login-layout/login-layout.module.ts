import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PatientLoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class LoginLayoutModule { }
