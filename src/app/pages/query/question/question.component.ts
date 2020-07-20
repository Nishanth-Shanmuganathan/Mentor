import { Query } from 'src/app/services/interfaces';
import { Component, OnInit, Input } from '@angular/core';
import { QueryService } from 'src/app/services/query.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() query: Query;
  showAnswers = false;
  answer: string;
  constructor(
    private queryService: QueryService
  ) { }

  ngOnInit(): void {
  }

  addAnswer() {
    if (this.answer) {
      this.queryService.addAnswers(this.query.id, this.answer);
    }
  }
}
