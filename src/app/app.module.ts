import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './utils/header/header.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MentorLayoutComponent } from './layouts/mentor-layout/mentor-layout.component';
import { SideNavComponent } from './utils/side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthLayoutComponent,
    MentorLayoutComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
