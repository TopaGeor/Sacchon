import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
//import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { DoctorComponent } from 'src/app/doctor/doctor/doctor.component';
import { PatientComponent } from 'src/app/patient/patient/patient.component';
import { PatientDetailsComponent } from 'src/app/patient/patient-details/patient-details.component';

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "patient", component: PatientComponent },
  { path: "patient/:id", component: PatientDetailsComponent },
  { path: "doctor", component: DoctorComponent },
  //{ path: "icons", component: IconsComponent },
  { path: "notifications", component: NotificationsComponent },
  //{ path: "user", component: UserComponent },
  //{ path: "tables", component: TablesComponent },
  //{ path: "typography", component: TypographyComponent }
];
