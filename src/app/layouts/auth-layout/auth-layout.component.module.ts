import { MaterialModule } from './../../material.module';
import { AuthComponent } from './auth/auth.component';
import { AuthLayoutComponent } from './auth-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ErrorComponent } from 'src/app/utils/error/error.component';
import { OtpComponent } from 'src/app/utils/otp/otp.component';
import { DetailsRegistrationComponent } from './details-registration/details-registration.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', component: AuthComponent },
      { path: 'details', component: DetailsRegistrationComponent }
    ]
  }
];


@NgModule({
  declarations: [
    ErrorComponent,
    OtpComponent,
    DetailsRegistrationComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
  ]
})
export class AuthLayoutModule { }
