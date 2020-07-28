import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { UtilsModule } from './../../utils/utils.module';
import { MaterialModule } from './../../material.module';

import { MentorLayoutComponent } from './mentor-layout.component';
import { AnswerComponent } from 'src/app/pages/query/answer/answer.component';
import { QuestionComponent } from 'src/app/pages/query/question/question.component';
import { AddQueryComponent } from 'src/app/pages/query/add-query/add-query.component';

import { QueryComponent } from 'src/app/pages/query/query.component';

import { MessagingComponent } from 'src/app/pages/messaging/messaging.component';

import { ConnectionComponent } from 'src/app/pages/connection/connection.component';

import { GroupsComponent } from 'src/app/pages/groups/groups.component';

import { ProjectsComponent } from 'src/app/pages/projects/projects.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'queries'
  },
  {
    path: 'queries',
    component: QueryComponent,
  },
  { path: 'messaging', component: MessagingComponent },
  { path: 'connections', component: ConnectionComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'groups', component: GroupsComponent }
];

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
    RouterModule.forChild(routes,),
    FormsModule,
    ReactiveFormsModule,

    MaterialModule,
    UtilsModule
  ]
})
export class MentorLayoutModule { }
