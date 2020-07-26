import { Answer } from './interfaces';
import { tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { UIService } from 'src/app/services/ui.service';
import { HttpClient } from '@angular/common/http';
import { Query } from 'src/app/services/interfaces';
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
    private uiService: UIService
  ) { }


  addQueries(query: { query: string; domain: string; }) {
    console.log(query);
    return this.http.post<{ message: string, query: Query }>(environment.server + '/queries', query)
      .pipe(tap(res => {
        this.queries.unshift(res.query);
        this.querySubject.next(this.queries);
      }));
  }

  fetchQueries() {
    this.http.get<{ message?: string, queries: Query[] }>(environment.server + '/queries')
      .subscribe(res => {
        this.queries = res.queries;
        this.querySubject.next(this.queries);
      }, err => {
        this.uiService.errorMessage(err.error.message);
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
}
