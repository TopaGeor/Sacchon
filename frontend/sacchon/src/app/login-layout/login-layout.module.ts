import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LandpageComponent } from './landpage/landpage.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LandpageComponent, 
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class LoginLayoutModule { }
