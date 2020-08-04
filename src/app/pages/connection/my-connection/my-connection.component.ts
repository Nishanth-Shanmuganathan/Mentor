import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/services/interfaces';
import { ConnectionService } from 'src/app/services/connection.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-my-connection',
  templateUrl: './my-connection.component.html',
  styleUrls: ['./my-connection.component.css']
})
export class MyConnectionComponent implements OnInit, OnDestroy {

  connections: User[] = [];
  connectionSubscription: Subscription;
  constructor(
    private connectionService: ConnectionService,
  ) { }

  ngOnInit(): void {
    this.connectionSubscription = this.connectionService.connectionSubscription.subscribe(res => {
      this.connections = res;
    });

    this.connectionService.fetchMyConnections().subscribe(res => {
      this.connectionService.connections = res.data;
      this.connectionService.connectionSubscription.next(this.connectionService.connections);
    }, err => {
      console.log(err);
    });
  }

  ngOnDestroy() {
    this.connectionSubscription.unsubscribe();
  }

}
