import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { DoctorComponent } from './doctor/doctor/doctor.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthPageComponent } from './layouts/auth-page/auth-page.component';
import { PatientDataDetailComponent } from './shared/patient-data-detail/patient-data-detail.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';
import { PatientNullComponent } from './patient/patient-null/patient-null.component';
import { PatientComponent } from './patient/patient/patient.component';
import { PatientDataComponent } from './shared/patient-data/patient-data.component';
import { ConsultationsComponent } from './shared/consultations/consultations.component';
import { PostPatientDataComponent } from './patient/post-patient-data/post-patient-data.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren:
          () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
      }
    ]
  }, {
    path: '',
    component: AuthPageComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/auth-page/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {
    path: 'patient',
    children: [
      {
        path: '',
        component: PatientComponent,
        loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule)
      },
      {
        path: ':id',
        component: PatientDetailsComponent,
        loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule)
      },
      {
        path: ':id/data',
        component: PatientDataComponent,
        loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule)
      },
      {
        path: ':patientId/data/:dataId',
        component: PatientDataDetailComponent,
        loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule)
      },
      {
        path: ':patientId/:doctorId/consultation',
        component: ConsultationsComponent,
        loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule)
      }
    ]
  },
  {
    path: 'patient_null',
    children: [
      {
        path: '',
        component: PatientNullComponent,
        loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule)
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
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
