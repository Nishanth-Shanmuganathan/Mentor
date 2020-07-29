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
    private http: HttpClient,
    private route: Router,
    private uiService: UIService,
    private authService: AuthService
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

  sendConnectionRequest(id) {
    this.http.post<{ message: string, user: User }>(environment.server + '/conn/' + id, {})
      .subscribe(res => {
        this.authService.user = res.user;
        this.authService.userSubscription.next(res.user);
        const receiverIndex = this.connections.findIndex(connection => connection._id === id);
        this.connections.splice(receiverIndex, 1);
        this.uiService.errorMessage(res.message);
        this.connectionSubscription.next(this.connections);
      }, err => {
        console.log(err);
        this.uiService.errorMessage(err.error.message);
      });
  }

  withdraw(id) {
    this.http.get<{ message: string, user: User }>(environment.server + '/conn/withdraw/' + id)
      .subscribe(res => {
        this.authService.user = res.user;
        this.authService.userSubscription.next(res.user);
        this.uiService.errorMessage(res.message);
      }, err => {
        console.log(err);
        this.uiService.errorMessage(err.error.message);
      });
  }

  accept(id) {
    this.http.get<{ message: string, user: User }>(environment.server + '/conn/accept/' + id)
      .subscribe(res => {
        this.authService.user = res.user;
        this.authService.userSubscription.next(res.user);
        this.uiService.errorMessage(res.message);
      }, err => {
        console.log(err);
        this.uiService.errorMessage(err.error.message);
      });
  }

  reject(id) {
    this.http.get<{ message: string, user: User }>(environment.server + '/conn/reject/' + id)
      .subscribe(res => {
        this.authService.user = res.user;
        this.authService.userSubscription.next(res.user);
        this.uiService.errorMessage(res.message);
      }, err => {
        console.log(err);
        this.uiService.errorMessage(err.error.message);
      });
  }
}
