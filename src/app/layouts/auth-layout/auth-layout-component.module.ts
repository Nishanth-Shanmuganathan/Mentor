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
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatDatepickerModule } from '@angular/material/datepicker';

const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', component: AuthComponent },
      { path: 'details', component: DetailsRegistrationComponent }
    ]
  }
];

const Modules = [
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatSelectModule,
  MatMenuModule,
  MatSidenavModule,
  MatTreeModule,
  MatListModule,
  MatRippleModule,
  MatExpansionModule,
  MatDialogModule,
  MatStepperModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatSliderModule,
  MatDatepickerModule
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
    ...Modules
  ],
  providers: [
  ]
})
export class AuthLayoutModule { }
