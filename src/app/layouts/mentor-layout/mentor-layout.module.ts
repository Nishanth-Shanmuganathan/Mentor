import { MyConnectionComponent } from './../../pages/connection/my-connection/my-connection.component';
import { NetworkNotificationsComponent } from './../../pages/notifications/network-notifications/network-notifications.component';
import { NotificationsComponent } from './../../pages/notifications/notifications.component';
import { QueryModule } from './../../pages/query/query.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UtilsModule } from './../../utils/utils.module';

import { MentorLayoutComponent } from './mentor-layout.component';

import { QueryComponent } from 'src/app/pages/query/query.component';

import { MessagingComponent } from 'src/app/pages/messaging/messaging.component';

import { ConnectionComponent } from 'src/app/pages/connection/connection.component';
import { ProfileCardsComponent } from './../../pages/connection/profile-cards/profile-cards.component';

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
  { path: 'connections', component: ConnectionComponent, },
  { path: 'my-connections', component: MyConnectionComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'notifications', component: NotificationsComponent }
];

@NgModule({
  declarations: [
    MentorLayoutComponent,
    MessagingComponent,
    ConnectionComponent,
    GroupsComponent,
    ProjectsComponent,
    ProfileCardsComponent,
    NotificationsComponent,
    NetworkNotificationsComponent,
    MyConnectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    UtilsModule,

    QueryModule
  ]
})
export class MentorLayoutModule { }
