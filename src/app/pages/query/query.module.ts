import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UtilsModule } from './../../utils/utils.module';

import { QueryComponent } from 'src/app/pages/query/query.component';
import { AnswerComponent } from 'src/app/pages/query/answer/answer.component';
import { QuestionComponent } from 'src/app/pages/query/question/question.component';
import { AddQueryComponent } from 'src/app/pages/query/add-query/add-query.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: QueryComponent }
];

@NgModule({
  declarations: [
    QueryComponent,
    AnswerComponent,
    QuestionComponent,
    AddQueryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilsModule
  ]
})
export class QueryModule { }
