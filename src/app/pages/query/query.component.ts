import { Subscription } from 'rxjs';
import { AddQueryComponent } from './add-query/add-query.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { User } from './../../services/interfaces';
import { QueryService } from './../../services/query.service';
import { UIService } from './../../services/ui.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Query } from 'src/app/services/interfaces';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit, OnDestroy {
  isMobile: boolean;
  queries: Query[];
  user: User;
  querySubscription: Subscription;
  userSubscription: Subscription;
  constructor(
    public uiService: UIService,
    private queryService: QueryService,
    private authService: AuthService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.user = this.authService.user;
    console.log(this.user);
    this.userSubscription = this.authService.userSubscription.subscribe(res => {
      this.user = res;
      console.log(this.user);
    });

    this.querySubscription = this.queryService.querySubject.subscribe(res => {
      this.queries = res;
    });

    this.queryService.fetchQueries();
  }

  openAddQuery() {
    this.dialog.open(AddQueryComponent, { disableClose: true });
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }
}
