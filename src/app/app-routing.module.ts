import { NgModule } from '@angular/core';

import { AuthGuard } from './services/auth.gaurd';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'mentor'
  },
  {
    path: 'auth',
    loadChildren: () => import('./layouts/auth-layout/auth-layout.module').then(mod => mod.AuthLayoutModule)
  },
  {
    path: 'mentor',
    canActivate: [AuthGuard],
    loadChildren: () => import('./layouts/mentor-layout/mentor-layout.module').then(mod => mod.MentorLayoutModule)
  },
  // {
  //   path: '**',
  //   redirectTo: 'auth'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
