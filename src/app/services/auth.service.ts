import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { AuthCred, Details, User } from './interfaces';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;
  userSubscription = new BehaviorSubject<User>(this.user);
  isAuth = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));

  constructor(
    private http: HttpClient,
    private route: Router,
  ) {
  }

  getUser() {
    this.http.get<{ user: User }>(environment.server + '/auth/user')
      .subscribe(res => {
        this.user = res.user;
        this.userSubscription.next(this.user);
      }, err => {
        this.logout();
      });
  }


  getParticularUser(userId: string) {
    return this.http.get<{ user: User }>(environment.server + '/auth/user/' + userId);
  }


  login(cred: AuthCred) {
    return this.http.post<{ token: string, user: User }>(environment.server + '/auth/login', cred)
      .pipe(tap(res => {
        localStorage.setItem('token', res.token);
        this.isAuth.next(true);
        this.user = res.user;
        this.userSubscription.next(this.user);
      }));
  }

  register(cred: AuthCred) {
    return this.http.post<{ token: string, user: User }>(environment.server + '/auth/email-register', cred)
      .pipe(tap(res => {
        localStorage.setItem('token', res.token);
        this.isAuth.next(true);
      }));
  }

  registerDetails(cred: Details) {
    return this.http.post<{ message: string, user: User }>(environment.server + '/auth/register', cred)
      .pipe(tap(res => {
        this.user = res.user;
        this.userSubscription.next(this.user);
      }));
  }


  checkOtp(otp: string) {
    return this.http.post(environment.server + '/auth/otp-verification', { otp });
  }

  resendOtp() {
    return this.http.get(environment.server + '/auth/resend');
  }

  logout() {
    return this.http.get<{ message: string }>(environment.server + '/auth/logout')
      .pipe(tap(res => {
        localStorage.clear();
        this.isAuth.next(false);
        this.user = null;
        this.userSubscription.next(this.user);
        this.route.navigate(['auth']);
      }));

  }

  async countriesList(value) {
    return this.http.get<{ data: object[] }>(environment.server + '/auth/countries-list/' + value)
      .pipe(map(res => {
        const data = [];
        res.data.forEach(ele => {
          // tslint:disable-next-line: no-string-literal
          data.push(ele['place_name']);
        });
        return data;
      }))
      .toPromise();
  }
}
