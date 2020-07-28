import { AuthLayoutComponent } from './auth-layout.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DetailsRegistrationComponent } from './details-registration/details-registration.component';
import { AuthComponent } from './auth/auth.component';
import { OtpComponent } from './otp/otp.component';

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
