import { AuthLayoutComponent } from './auth-layout.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DetailsRegistrationComponent } from './details-registration/details-registration.component';
import { AuthComponent } from './auth/auth.component';
import { OtpComponent } from './otp/otp.component';


@NgModule({
  declarations: [
    AuthLayoutComponent,
    OtpComponent,
    DetailsRegistrationComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    MaterialModule
  ],
  exports: [
    AuthLayoutComponent,
    OtpComponent,
    DetailsRegistrationComponent,
    AuthComponent,
  ]
})
export class AuthLayoutModule { }
