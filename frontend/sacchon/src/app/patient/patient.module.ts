import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient/patient.component';
import { PatientRoutingModule } from './patient-routing.module';

import { ConsultationsComponent } from '../shared/consultations/consultations.component';
import { PatientNullComponent } from './patient-null/patient-null.component';
import { PostPatientDataComponent } from './post-patient-data/post-patient-data.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientDetailsComponent } from './patient-details/patient-details.component';



@NgModule({
  declarations: [
    PatientComponent,  
    PatientNullComponent,
    PatientDetailsComponent, 
    ConsultationsComponent, 
    PostPatientDataComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    ReactiveFormsModule
  ]
})
export class PatientModule { }
