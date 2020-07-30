import { QueryService } from 'src/app/services/query.service';
import { Answer } from './../../../services/interfaces';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Query, User } from 'src/app/services/interfaces';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  @Input() answer: Answer;
  @Input() user: User;
  @Output() commentId = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
