import { NetworkNotificationsComponent } from './notifications/network-notifications/network-notifications.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    ProfileComponent,
    NotificationsComponent,
    NetworkNotificationsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    HeaderComponent,
    SideNavComponent,
    ErrorComponent,
    NotificationsComponent,
    NetworkNotificationsComponent
  ]
})
export class UtilsModule { }
