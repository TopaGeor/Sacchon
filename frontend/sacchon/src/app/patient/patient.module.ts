import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient/patient.component';
import { PatientRoutingModule } from './patient-routing.module';

import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientDataDetailComponent } from '../shared/patient-data-detail/patient-data-detail.component';
import { ConsultationsComponent } from '../shared/consultations/consultations.component';
import { PatientNullComponent } from './patient-null/patient-null.component';
import { PatientDataComponent } from '../shared/patient-data/patient-data.component';
import { PostPatientDataComponent } from './post-patient-data/post-patient-data.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PatientComponent, PatientDataComponent, 
    PatientDetailsComponent, PatientDataDetailComponent, 
    PatientNullComponent, ConsultationsComponent, PostPatientDataComponent],
  imports: [
    CommonModule,
    PatientRoutingModule,
    ReactiveFormsModule
  ]
})
export class PatientModule { }
