import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';


import { environment } from './../../environments/environment';
import { AuthCred, Details, User } from './interfaces';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User = JSON.parse(localStorage.getItem('user'));
  isAuth = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));

  constructor(
    private http: HttpClient,
    private route: Router
  ) {
  }

  login(cred: AuthCred) {
    return this.http.post<{ token: string, user: User }>(environment.server + '/auth/login', cred)
      .pipe(tap(res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
        this.isAuth.next(true);
        this.user = res.user;
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
        localStorage.setItem('user', JSON.stringify(res.user));
        this.user = res.user;
      }));
  }


  checkOtp(otp: string) {
    return this.http.post(environment.server + '/auth/otp-verification', { otp });
  }

  resendOtp() {
    return this.http.get(environment.server + '/auth/resend');
  }

  logout() {
    localStorage.clear();
    this.isAuth.next(false);
    this.user = null;
    this.route.navigate(['auth']);
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
