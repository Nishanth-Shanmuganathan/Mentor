import { ProjectsComponent } from './pages/projects/projects.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { ConnectionComponent } from './pages/connection/connection.component';
import { MessagingComponent } from './pages/messaging/messaging.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MentorLayoutComponent } from './layouts/mentor-layout/mentor-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { QueryComponent } from './pages/query/query.component';

const routes: Routes = [
  { path: 'auth', component: AuthLayoutComponent },
  {
    path: '', component: MentorLayoutComponent,
    children: [
      { path: '', component: QueryComponent },
      { path: 'messaging', component: MessagingComponent },
      { path: 'connections', component: ConnectionComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'groups', component: GroupsComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
