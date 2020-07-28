import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

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
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    SideNavComponent,
    ErrorComponent,
  ]
})
export class UtilsModule { }
