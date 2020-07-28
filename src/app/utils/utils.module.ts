import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MaterialModule } from './../material.module';

import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SideNavComponent,
    ErrorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    SideNavComponent,
    ErrorComponent,
  ]
})
export class UtilsModule { }
