import { AddQueryComponent } from './add-query/add-query.component';
import { MatDialog } from '@angular/material/dialog';
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
  queries: Query[] = [];
  user: User;
  constructor(
    public uiService: UIService,
    private queryService: QueryService,
    private authService: AuthService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.user = this.authService.user;
    this.queryService.fetchQueries();
    this.queryService.querySubject.subscribe(res => {
      this.queries = res;
    });
  }

  openAddQuery() {
    this.dialog.open(AddQueryComponent, { disableClose: true });
  }

}
