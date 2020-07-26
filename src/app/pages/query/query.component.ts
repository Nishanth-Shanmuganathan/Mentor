import { AuthService } from 'src/app/services/auth.service';
import { User } from './../../services/interfaces';
import { QueryService } from './../../services/query.service';
import { UIService } from './../../services/ui.service';
import { Component, OnInit } from '@angular/core';
import { Query } from 'src/app/services/interfaces';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
  isMobile: boolean;
  queries: Query[];
  user: User;
  constructor(
    public uiService: UIService,
    private queryService: QueryService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.user = this.authService.user;
    this.queries = this.queryService.fetchQueries();
  }

}
