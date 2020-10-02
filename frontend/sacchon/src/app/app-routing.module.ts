
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { DoctorComponent } from './doctor/doctor/doctor.component';

import { PatientDataDetailComponent } from './patient/patient-data-detail/patient-data-detail.component';
import { PatientNullComponent } from './patient/patient-null/patient-null.component';
import { PatientComponent } from './patient/patient/patient.component';
import { PatientDataComponent } from './patient/patient-data/patient-data.component';
import { PostPatientDataComponent } from './patient/post-patient-data/post-patient-data.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';
import { DoctorDetailsComponent } from './doctor/doctor-details/doctor-details.component';
import { PostConsultationComponent } from './doctor/post-consultation/post-consultation.component';
import { PutPatientDataComponent } from './patient/put-patient-data/put-patient-data.component';
import { DeletePatientDataComponent } from './patient/delete-patient-data/delete-patient-data.component';
import { AverageComponent } from './patient/average/average.component';
import { DeleteDoctorComponent } from './doctor/delete-doctor/delete-doctor.component';
import { PutConsultationComponent } from './doctor/put-consultation/put-consultation.component';
import { ConsultationsComponent } from './doctor/consultations/consultations.component';
import { DeletePatientComponent } from './patient/delete-patient/delete-patient.component';
import { InfoSubDataComponent } from './chief-doctor/info-sub-data/info-sub-data.component';
import { InfoSubConsultComponent } from './chief-doctor/info-sub-consult/info-sub-consult.component';
import { NoActUserComponent } from './chief-doctor/no-act-user/no-act-user.component';
import { NeedConsultComponent } from './chief-doctor/need-consult/need-consult.component';
import { ChiefDoctorComponent } from './chief-doctor/chief-doctor/chief-doctor.component';
import { LandpageComponent } from './login-layout/landpage/landpage.component';
import { LoginComponent } from './login-layout/login/login.component';
import { SetPatientToDoctorComponent } from './patient/set-patient-to-doctor/set-patient-to-doctor.component';
import { PatientConsultationComponent } from './patient/patient-consultation/patient-consultation.component';


const routes: Routes = [
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
    path: 'patient_null',
    children: [
      {
        path: '',
        component: PatientNullComponent,
      }
    ]
  },
  {
    path: 'doctor',
    children: [
      {
        path: '',
        component: ChiefDoctorComponent,
      },
      {
        path: ':doctorId',
        component: DoctorDetailsComponent
      },
      {
        path: ':doctorId/patient',
        component: DoctorComponent
      },
      {
        path: ':doctorId/delete',
        component: DeleteDoctorComponent
      },
      {
        path: ':doctorId/consultation',
        component: ConsultationsComponent,
      },
      {
        path: ':doctorId/patient/:patientId/consultation/post',
        component: PostConsultationComponent,
      },
      {
        path: ':doctorId/patient/:patientId/consultation/:consId/edit',
        component: PutConsultationComponent
      }
    ]
  },
  {
    path: 'chief',
    children: [
      {
        path: '',
        component: ChiefDoctorComponent
      },
      {
        path: 'needCons',
        component: NeedConsultComponent,
      },
      {
        path: ':patientId/data/infoSub',
        component: InfoSubDataComponent,
      },
      {
        path: ':doctorId/consultation/infoSub',
        component: InfoSubConsultComponent,
      },
      {
        path: 'noActivity',
        component: NoActUserComponent
      }
    ]
  },
  {
    path: "**",
    component: LandpageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
