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
import { PatientLoginComponent } from './login-layout/patient-login/patient-login.component';
import { DoctorLoginComponent } from './login-layout/doctor-login/doctor-login.component';
import { ChiefDoctorLoginComponent } from './login-layout/chief-doctor-login/chief-doctor-login.component';

const routes: Routes = [
  {
    path: 'login',
    children: [
      {
        path: 'patient',
        component: PatientLoginComponent
      },
      {
        path: 'doctor',
        component: DoctorLoginComponent
      },
      {
        path: 'chief_doctor',
        component: ChiefDoctorLoginComponent
      }
    ]
  },
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
  },
  {
    path: 'post-patient-data',
    children: [
      {
        path: '',
        component: PostPatientDataComponent,
        loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule)
      }
    ]
  },
  {
    path: 'doctor',
    children: [
      {
        path: '',
        component: DoctorComponent,
        loadChildren: () => import('./doctor/doctor.module').then(m => m.DoctorModule)
      },
      {
        path: ':doctorId',
        component: DoctorComponent,
        loadChildren: () => import('./doctor/doctor.module').then(m => m.DoctorModule)
      },
    ]
  },
  {
    path: "**",
    redirectTo: "dashboard"
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
