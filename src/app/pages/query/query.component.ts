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

  constructor(
    public uiService: UIService,
    private queryService: QueryService
  ) { }

  ngOnInit(): void {
    this.queries = this.queryService.fetchQueries();
  }

}
