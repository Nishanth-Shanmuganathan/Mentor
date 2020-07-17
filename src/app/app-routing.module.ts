import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MentorLayoutComponent } from './layouts/mentor-layout/mentor-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AuthLayoutComponent },
  { path: 'home', component: MentorLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
