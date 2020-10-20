import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoActUserComponent } from './no-act-user/no-act-user.component';
import { NeedConsultComponent } from './need-consult/need-consult.component';
import { ChiefDoctorComponent } from './chief-doctor/chief-doctor.component';
import { InfoSubDataComponent } from './info-sub-data/info-sub-data.component';
import { InfoSubConsultComponent } from './info-sub-consult/info-sub-consult.component';

const routes: Routes = [
  {
    path: '',
    component: ChiefDoctorComponent,
    children: [
      {
        path: 'needCons',
        component: NeedConsultComponent,
      },
      {
        path: 'noActivity',
        component: NoActUserComponent
      },
      {
        path: ':patientId/data/infoSub',
        component: InfoSubDataComponent,
      },
      {
        path: ':doctorId/consultation/infoSub',
        component: InfoSubConsultComponent,
      },
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule]
})
export class ChiefDoctorRoutingModule { }
