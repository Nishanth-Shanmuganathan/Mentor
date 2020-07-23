import { AuthGuard } from './services/auth.gaurd';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './utils/header/header.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MentorLayoutComponent } from './layouts/mentor-layout/mentor-layout.component';
import { SideNavComponent } from './utils/side-nav/side-nav.component';
import { QueryComponent } from './pages/query/query.component';
import { MessagingComponent } from './pages/messaging/messaging.component';
import { ConnectionComponent } from './pages/connection/connection.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AnswerComponent } from './pages/query/answer/answer.component';
import { QuestionComponent } from './pages/query/question/question.component';
import { ErrorComponent } from './utils/error/error.component';
import { OtpComponent } from './utils/otp/otp.component';
import { AuthInterceptor } from './services/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthLayoutComponent,
    MentorLayoutComponent,
    SideNavComponent,
    QueryComponent,
    MessagingComponent,
    ConnectionComponent,
    GroupsComponent,
    ProjectsComponent,
    AnswerComponent,
    QuestionComponent,
    ErrorComponent,
    OtpComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
