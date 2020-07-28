import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { UtilsModule } from './../../utils/utils.module';
import { MaterialModule } from './../../material.module';

import { QueryComponent } from 'src/app/pages/query/query.component';
import { AnswerComponent } from 'src/app/pages/query/answer/answer.component';
import { QuestionComponent } from 'src/app/pages/query/question/question.component';
import { AddQueryComponent } from 'src/app/pages/query/add-query/add-query.component';


@NgModule({
  declarations: [
    QueryComponent,
    AnswerComponent,
    QuestionComponent,
    AddQueryComponent,
  ],
  imports: [
    CommonModule,

    UtilsModule
  ]
})
export class QueryModule { }
