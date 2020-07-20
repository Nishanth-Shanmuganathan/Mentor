import { Component, OnInit, Input } from '@angular/core';
import { Query } from 'src/app/services/interfaces';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  @Input() answer: Query;
  constructor() { }

  ngOnInit(): void {

  }

}
