
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientDataDetailComponent } from './patient/patient-data-detail/patient-data-detail.component';
import { PatientNullComponent } from './patient/patient-null/patient-null.component';
import { PatientComponent } from './patient/patient/patient.component';
import { PatientDataComponent } from './patient/patient-data/patient-data.component';
import { PostPatientDataComponent } from './patient/post-patient-data/post-patient-data.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';
import { PutPatientDataComponent } from './patient/put-patient-data/put-patient-data.component';
import { DeletePatientDataComponent } from './patient/delete-patient-data/delete-patient-data.component';
import { AverageComponent } from './patient/average/average.component';
import { DeletePatientComponent } from './patient/delete-patient/delete-patient.component';
import { LandpageComponent } from './login-layout/landpage/landpage.component';
import { LoginComponent } from './login-layout/login/login.component';
import { SetPatientToDoctorComponent } from './patient/set-patient-to-doctor/set-patient-to-doctor.component';
import { PatientConsultationComponent } from './patient/patient-consultation/patient-consultation.component';


const routes: Routes = [
  {
    path: '',
    component: LandpageComponent
  },
  {
    path: 'login',
    component: LoginComponent
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
        path: ':patientId/:doctorId/ok',
        component: SetPatientToDoctorComponent,
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
        path: ':patientId/data/average',
        component: AverageComponent,
      },
      {
        path: ':patientId/data/:dataId',
        component: PatientDataDetailComponent,
      },
      {
        path: ':patientId/data/:dataId/edit',
        component: PutPatientDataComponent,
      },
      {
        path: ':patientId/data/:dataId/delete',
        component: DeletePatientDataComponent,
      },
      {
        path: ':id/delete',
        component: DeletePatientComponent,
      },
      {
        path: ':id/consultations',
        component: PatientConsultationComponent
      },
      {
        path: ':patientId/:doctorId',
        component: PatientNullComponent,
      },
    ]
  },
  {
    path: 'doctor',
    loadChildren: () => 
    import('./doctor/doctor.module')
    .then(m => m.DoctorModule)
  },
  {
    path: 'chief',
    loadChildren: () => 
    import('./chief-doctor/chief-doctor.module')
    .then(m => m.ChiefDoctorModule)
  },
  // {
  //   path: "**",
  //   component: LandpageComponent
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
