import { UtilsModule } from './../../utils/utils.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MentorLayoutComponent } from './mentor-layout.component';
import { QueryComponent } from 'src/app/pages/query/query.component';
import { MessagingComponent } from 'src/app/pages/messaging/messaging.component';
import { ConnectionComponent } from 'src/app/pages/connection/connection.component';
import { GroupsComponent } from 'src/app/pages/groups/groups.component';
import { ProjectsComponent } from 'src/app/pages/projects/projects.component';
import { AnswerComponent } from 'src/app/pages/query/answer/answer.component';
import { QuestionComponent } from 'src/app/pages/query/question/question.component';
import { AddQueryComponent } from 'src/app/pages/query/add-query/add-query.component';

@NgModule({
  declarations: [
    MentorLayoutComponent,
    QueryComponent,
    MessagingComponent,
    ConnectionComponent,
    GroupsComponent,
    ProjectsComponent,
    AnswerComponent,
    QuestionComponent,
    AddQueryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    MaterialModule,
    UtilsModule
  ],
  exports: [
    MentorLayoutComponent,
    QueryComponent,
    MessagingComponent,
    ConnectionComponent,
    GroupsComponent,
    ProjectsComponent,
    AnswerComponent,
    QuestionComponent,
    AddQueryComponent,
  ]
})
export class MentorLayoutModule { }
