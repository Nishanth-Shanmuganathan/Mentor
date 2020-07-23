import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';


import { environment } from './../../environments/environment';
import { AuthCred } from './interfaces';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(cred: AuthCred) {
    return this.http.post<{ token: string }>(environment.server + '/auth/login', cred)
      .pipe(tap(res => {
        localStorage.setItem('token', res.token);
      }));
  }

  register(cred: AuthCred) {
    return this.http.post<{ token: string }>(environment.server + '/auth/email-register', cred)
      .pipe(tap(res => {
        localStorage.setItem('token', res.token);
      }));
  }

  checkOtp(otp) {
    console.log(otp);
    return this.http.post(environment.server + '/auth/otp-verification', { otp });
  }

  resendOtp() {
    return this.http.get(environment.server + '/auth/resend');
  }
}
