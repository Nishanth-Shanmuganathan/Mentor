import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './services/auth.gaurd';
import { ProjectsComponent } from './pages/projects/projects.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { ConnectionComponent } from './pages/connection/connection.component';
import { MessagingComponent } from './pages/messaging/messaging.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MentorLayoutComponent } from './layouts/mentor-layout/mentor-layout.component';
import { QueryComponent } from './pages/query/query.component';
import { DetailsRegistrationComponent } from './layouts/auth-layout/details-registration/details-registration.component';
import { AuthComponent } from './layouts/auth-layout/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'mentor'
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () => import('./layouts/auth-layout/auth-layout.module').then(mod => mod.AuthLayoutModule)
  },
  {
    path: 'mentor',
    component: MentorLayoutComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./layouts/mentor-layout/mentor-layout.module').then(mod => mod.MentorLayoutModule)
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
