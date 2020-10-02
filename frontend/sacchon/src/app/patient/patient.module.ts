import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient/patient.component';
import { PatientRoutingModule } from './patient-routing.module';

import { PatientNullComponent } from './patient-null/patient-null.component';

import { ReactiveFormsModule } from '@angular/forms';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientDataComponent } from './patient-data/patient-data.component';
import { PatientDataDetailComponent } from './patient-data-detail/patient-data-detail.component';
import { PutPatientDataComponent } from './put-patient-data/put-patient-data.component';
import { DeletePatientDataComponent } from './delete-patient-data/delete-patient-data.component';
import { PostPatientDataComponent } from './post-patient-data/post-patient-data.component';
import { DeletePatientComponent } from './delete-patient/delete-patient.component';
import { AverageComponent } from './average/average.component';
import { SetPatientToDoctorComponent } from './set-patient-to-doctor/set-patient-to-doctor.component';



@NgModule({
  declarations: [
    PatientComponent,  
    PatientNullComponent,
    PatientDetailsComponent, 
    PostPatientDataComponent,
    PatientDataComponent,
    PatientDataDetailComponent,
    PutPatientDataComponent,
    DeletePatientDataComponent,
    DeletePatientComponent,
    AverageComponent,
    SetPatientToDoctorComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    ReactiveFormsModule
  ]
})
export class PatientModule { }
