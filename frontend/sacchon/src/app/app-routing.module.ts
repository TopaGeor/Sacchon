import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { DoctorComponent } from './doctor/doctor/doctor.component';

import { PatientDataDetailComponent } from './shared/patient-data-detail/patient-data-detail.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';
import { PatientNullComponent } from './patient/patient-null/patient-null.component';
import { PatientComponent } from './patient/patient/patient.component';
import { PatientDataComponent } from './shared/patient-data/patient-data.component';
import { ConsultationsComponent } from './shared/consultations/consultations.component';
import { PostPatientDataComponent } from './patient/post-patient-data/post-patient-data.component';

const routes: Routes = [
  {
    path: 'patient',
    children: [
      {
        path: '',
        component: PatientComponent,
      },
      {
        path: ':id',
        component: PatientDetailsComponent,
      },
      {
        path: ':id/data',
        component: PatientDataComponent,

      },
      {
        path: ':id/data/post',
        component: PostPatientDataComponent,
      },
      {
        path: ':patientId/data/:dataId',
        component: PatientDataDetailComponent,
      },
      {
        path: ':patientId/:doctorId/consultation',
        component: ConsultationsComponent,
      }
    ]
  },
  {
    path: 'patient_null',
    children: [
      {
        path: '',
        component: PatientNullComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
