import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';


import { environment } from './../../environments/environment';
import { AuthCred, Details, User } from './interfaces';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;
  isAuth = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));

  constructor(
    private http: HttpClient
  ) { }

  login(cred: AuthCred) {
    return this.http.post<{ token: string, user: User }>(environment.server + '/auth/login', cred)
      .pipe(tap(res => {
        this.user = res.user;
        localStorage.setItem('token', res.token);
      }));
  }

  register(cred: AuthCred) {
    return this.http.post<{ token: string, user: User }>(environment.server + '/auth/email-register', cred)
      .pipe(tap(res => {
        this.user = res.user;
        localStorage.setItem('token', res.token);
      }));
  }

  registerDetails(cred: Details) {
    console.log('hii');
    return this.http.post<{ message: string }>(environment.server + '/auth/register', cred);
  }


  checkOtp(otp) {
    console.log(otp);
    return this.http.post(environment.server + '/auth/otp-verification', { otp });
  }

  resendOtp() {
    return this.http.get(environment.server + '/auth/resend');
  }
}
