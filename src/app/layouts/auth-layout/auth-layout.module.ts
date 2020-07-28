import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MaterialModule } from './../../material.module';

import { OtpComponent } from './otp/otp.component';
import { AuthComponent } from './auth/auth.component';
import { AuthLayoutComponent } from './auth-layout.component';
import { DetailsRegistrationComponent } from './details-registration/details-registration.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AuthComponent },
  { path: 'details', component: DetailsRegistrationComponent },
];

@NgModule({
  declarations: [
    AuthLayoutComponent,
    OtpComponent,
    DetailsRegistrationComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AuthLayoutModule { }
