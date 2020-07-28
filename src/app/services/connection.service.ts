import { User } from './interfaces';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { environment } from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  connections: User[];
  connectionSubscription = new Subject<User[]>();

  constructor(
    private http: HttpClient,
    private route: Router
  ) { }


  fetchConnections() {
    this.http.get<{ data: User[] }>(environment.server + '/conn').subscribe(res => {
      console.log(res.data);
      this.connections = res.data;
      this.connectionSubscription.next(this.connections);
    }, err => {
      console.log(err);
    });
  }
}
