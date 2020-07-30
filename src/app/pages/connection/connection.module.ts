import { ProfileCardsComponent } from './profile-cards/profile-cards.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { UtilsModule } from './../../utils/utils.module';

import { MyConnectionComponent } from './my-connection/my-connection.component';
import { SearchComponent } from './../connection/search/search.component';
import { ConnectionComponent } from 'src/app/pages/connection/connection.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'list', component: MyConnectionComponent },
];

@NgModule({
  declarations: [
    ConnectionComponent,
    SearchComponent,
    MyConnectionComponent,
    ProfileCardsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilsModule
  ]
})
export class ConnectionModule { }
