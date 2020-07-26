import { User } from './../../../services/interfaces';
import { AuthService } from 'src/app/services/auth.service';
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
  user: User;
  showAnswers = false;
  answer: string;
  constructor(
    private queryService: QueryService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.user = this.authService.user;
  }

  deleteQuery(id) {
    this.queryService.deleteQueries(id);
  }

  deleteComment(commentId: string, queryId: string) {
    this.queryService.deleteAnswers(commentId, queryId);
  }
  addAnswer() {
    if (this.answer) {
      this.queryService.addAnswers(this.query._id, this.answer)
        .subscribe(res => {
          this.answer = null;
        });
    }
  }
}
