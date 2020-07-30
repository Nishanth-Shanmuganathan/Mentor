import { NotificationService } from './notification.service';
import { AuthService } from 'src/app/services/auth.service';
import { Answer } from './interfaces';
import { tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { UIService } from 'src/app/services/ui.service';
import { HttpClient } from '@angular/common/http';
import { Query, User } from 'src/app/services/interfaces';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  queries: Query[] = [];
  querySubject = new Subject<Query[]>();

  constructor(
    private http: HttpClient,
    private uiService: UIService,
    private authService: AuthService,
    private notificationService: NotificationService,
  ) { }


  addQueries(query: { query: string; domain: string; }) {
    return this.http.post<{ message: string, query: Query, user: User }>(environment.server + '/queries', query)
      .pipe(tap(res => {
        this.queries.unshift(res.query);
        this.querySubject.next(this.queries);
      }));
  }

  deleteQueries(id: string) {
    this.http.delete<{ message: string }>(environment.server + '/queries/' + id)
      .subscribe(res => {
        this.uiService.errorMessage(res.message);
        const index = this.queries.findIndex(ele => ele._id == id);
        this.queries.splice(index, 1);
        this.querySubject.next(this.queries);
      }, err => {
        this.uiService.errorMessage(err.error.message);
      });
  }

  fetchQueries() {
    this.http.get<{ message?: string, queries: Query[] }>(environment.server + '/queries')
      .subscribe(res => {
        this.queries = res.queries;
        this.querySubject.next(this.queries);
      }, err => {
        // this.uiService.errorMessage(err.error.message);
      });
  }



  addAnswers(queryId, answer: string) {
    return this.http.put<{ query: Query }>(environment.server + '/queries/' + queryId, { answer })
      .pipe(tap(res => {
        const index = this.queries.findIndex(query => query._id === res.query._id);
        this.queries[index].comments = res.query.comments;
        this.querySubject.next(this.queries);
      }));
  }

  deleteAnswers(commentId: string, queryId: string) {
    this.http.delete<{ message: string }>(environment.server + '/queries/' + queryId + '/' + commentId)
      .subscribe(res => {
        this.uiService.errorMessage(res.message);
        const queryIndex = this.queries.findIndex(query => query._id == queryId);
        this.queries[queryIndex].comments.forEach((comment, index) => {
          if (comment._id == commentId) {
            this.queries[queryIndex].comments.splice(index, 1);
            return;
          }
        });
        this.querySubject.next(this.queries);
      }, err => {
        this.uiService.errorMessage(err.error.message);
      });
  }

}
