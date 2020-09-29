
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { DoctorComponent } from './doctor/doctor/doctor.component';

import { PatientDataDetailComponent } from './shared/patient-data-detail/patient-data-detail.component';

import { PatientNullComponent } from './patient/patient-null/patient-null.component';
import { PatientComponent } from './patient/patient/patient.component';
import { PatientDataComponent } from './shared/patient-data/patient-data.component';
import { ConsultationsComponent } from './shared/consultations/consultations.component';
import { PostPatientDataComponent } from './patient/post-patient-data/post-patient-data.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';
import { LoginComponent } from './patient/login/login.component';

const routes: Routes = [
  {
    path: 'patient',
    children: [
      {
        path: '',
        component: PatientComponent,
      },
      {
        path: 'login',
        component: LoginComponent
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
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
