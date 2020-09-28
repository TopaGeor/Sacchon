import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
//import { UserComponent } from "../../pages/user/user.component";
//import { TablesComponent } from "../../pages/tables/tables.component";
//import { TypographyComponent } from "../../pages/typography/typography.component";
import { PatientComponent } from 'src/app/patient/patient/patient.component';
import { DoctorComponent } from 'src/app/doctor/doctor/doctor.component';
import { PatientDetailsComponent } from 'src/app/patient/patient-details/patient-details.component';
import { PatientDataDetailComponent } from 'src/app/shared/patient-data-detail/patient-data-detail.component';
import { PatientNullComponent } from 'src/app/patient/patient-null/patient-null.component';
import { PatientDataComponent } from 'src/app/shared/patient-data/patient-data.component';
import { ConsultationsComponent } from 'src/app/shared/consultations/consultations.component';
import { PostPatientDataComponent } from 'src/app/patient/post-patient-data/post-patient-data.component';
import { DoctorDetailsComponent } from 'src/app/doctor/doctor-details/doctor-details.component';

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "patient", component: PatientComponent },
  { path: "patient/:id", component: PatientDetailsComponent },
  { path: "doctor", component: DoctorComponent },
  //{ path: "icons", component: IconsComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "patient", component: PatientComponent},
  { path: "patient/:id", component: PatientDetailsComponent},
  { path: "patient/:id/data", component: PatientDataComponent},
  { path: "patient/:patientId/data/:dataId", component: PatientDataDetailComponent},
  { path: "patient_null", component: PatientNullComponent},
  { path: "patient/:patientId/:doctorId/consultation", component: ConsultationsComponent},
  { path: "patient/:patientId/data", component: PostPatientDataComponent},
  { path: "doctor", component: DoctorComponent},
  { path: "doctor/:doctorId", component: DoctorDetailsComponent}
  //{ path: "user", component: UserComponent },
  //{ path: "tables", component: TablesComponent },
  //{ path: "typography", component: TypographyComponent }
];
