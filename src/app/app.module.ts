import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthGuard } from './services/auth.gaurd';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor } from './services/auth.interceptor';

import { AppComponent } from './app.component';
import { AuthLayoutModule } from './layouts/auth-layout/auth-layout.module';
import { MentorLayoutModule } from './layouts/mentor-layout/mentor-layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    RouterModule,
    AppRoutingModule,

    MentorLayoutModule,
    AuthLayoutModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
