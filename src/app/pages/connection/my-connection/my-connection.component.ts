import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/services/interfaces';
import { ConnectionService } from 'src/app/services/connection.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-my-connection',
  templateUrl: './my-connection.component.html',
  styleUrls: ['./my-connection.component.css']
})
export class MyConnectionComponent implements OnInit {

  connections: User[];
  constructor(
    private connectionService: ConnectionService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.connectionService.connectionSubscription.subscribe(res => {
      console.log('inside sub');
      this.connections = res;
      console.log(res);
    });
    this.connectionService.fetchMyConnections();
  }

}
