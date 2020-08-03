import { AuthService } from 'src/app/services/auth.service';
import { UIService } from 'src/app/services/ui.service';
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
    private http: HttpClient
  ) { }


  fetchConnections() {
    this.http.get<{ data: User[] }>(environment.server + '/conn').subscribe(res => {
      this.connections = res.data;
      this.connectionSubscription.next(this.connections);
    }, err => {
      console.log(err);
    });
  }

  fetchMyConnections() {
    return this.http.get<{ data: User[] }>(environment.server + '/conn/my');
  }

  sendConnectionRequest(id) {
    return this.http.post<{ message: string, user: User }>(environment.server + '/conn/' + id, {});
  }

  withdraw(id) {
    return this.http.get<{ message: string, user: User }>(environment.server + '/conn/withdraw/' + id);
  }

  accept(id) {
    return this.http.get<{ message: string, user: User }>(environment.server + '/conn/accept/' + id);
  }

  reject(id) {
    return this.http.get<{ message: string, user: User }>(environment.server + '/conn/reject/' + id);
  }

  remove(id) {
    return this.http.get<{ message: string, user: User, userConnections: User[] }>(environment.server + '/conn/remove/' + id);
  }
}
