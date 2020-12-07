import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientNullComponent } from '../patient/patient-null/patient-null.component';

import { DoctorComponent } from '../doctor/doctor/doctor.component';
import { DeleteDoctorComponent } from '../doctor/delete-doctor/delete-doctor.component';
import { ConsultationsComponent } from '../doctor/consultations/consultations.component';
import { ChiefDoctorComponent } from '../chief-doctor/chief-doctor/chief-doctor.component';
import { DoctorDetailsComponent } from '../doctor/doctor-details/doctor-details.component';
import { PutConsultationComponent } from '../doctor/put-consultation/put-consultation.component';
import { PostConsultationComponent } from '../doctor/post-consultation/post-consultation.component';

const routes: Routes = [
  {
    path: '',
    component: ChiefDoctorComponent,
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
