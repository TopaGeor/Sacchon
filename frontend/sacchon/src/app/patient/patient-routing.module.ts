import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientComponent } from '../patient/patient/patient.component';
import { AverageComponent } from '../patient/average/average.component';
import { PatientNullComponent } from '../patient/patient-null/patient-null.component';
import { PatientDataComponent } from '../patient/patient-data/patient-data.component';
import { DeletePatientComponent } from '../patient/delete-patient/delete-patient.component';
import { PatientDetailsComponent } from '../patient/patient-details/patient-details.component';
import { PutPatientDataComponent } from '../patient/put-patient-data/put-patient-data.component';
import { PostPatientDataComponent } from '../patient/post-patient-data/post-patient-data.component';
import { DeletePatientDataComponent } from '../patient/delete-patient-data/delete-patient-data.component';
import { PatientDataDetailComponent } from '../patient/patient-data-detail/patient-data-detail.component';
import { PatientConsultationComponent } from '../patient/patient-consultation/patient-consultation.component';
import { SetPatientToDoctorComponent } from '../patient/set-patient-to-doctor/set-patient-to-doctor.component';

const routes: Routes = [{
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
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
