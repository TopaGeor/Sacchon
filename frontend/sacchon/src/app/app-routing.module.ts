
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandpageComponent } from './login-layout/landpage/landpage.component';
import { LoginComponent } from './login-layout/login/login.component';


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
    loadChildren: () => 
    import('./patient/patient.module')
    .then(m => m.PatientModule)
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
