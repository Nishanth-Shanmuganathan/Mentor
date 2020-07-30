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

import { GroupsComponent } from 'src/app/pages/groups/groups.component';

import { ProjectsComponent } from 'src/app/pages/projects/projects.component';
import { ConnectionComponent } from 'src/app/pages/connection/connection.component';

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
  {
    path: 'connections',
    component: ConnectionComponent,
    loadChildren: () => import('./../../pages/connection/connection.module').then(mod => mod.ConnectionModule)
  },
  { path: 'messaging', component: MessagingComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'notifications', component: NotificationsComponent }
];

@NgModule({
  declarations: [
    MentorLayoutComponent,
    MessagingComponent,
    GroupsComponent,
    ProjectsComponent,
    NotificationsComponent,
    NetworkNotificationsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    UtilsModule,

    QueryModule
  ]
})
export class MentorLayoutModule { }
