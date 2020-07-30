import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UtilsModule } from './../../utils/utils.module';

import { MentorLayoutComponent } from './mentor-layout.component';

import { MessagingComponent } from 'src/app/pages/messaging/messaging.component';

import { GroupsComponent } from 'src/app/pages/groups/groups.component';

import { ProjectsComponent } from 'src/app/pages/projects/projects.component';
import { ConnectionComponent } from 'src/app/pages/connection/connection.component';
import { NotificationsComponent } from 'src/app/utils/notifications/notifications.component';

const routes: Routes = [
  {
    path: '',
    component: MentorLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'queries'
      },
      {
        path: 'queries',
        loadChildren: () => import('./../../pages/query/query.module').then(mod => mod.QueryModule)
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
    ]
  },

];

@NgModule({
  declarations: [
    MentorLayoutComponent,
    MessagingComponent,
    GroupsComponent,
    ProjectsComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    UtilsModule,

  ]
})
export class MentorLayoutModule { }
