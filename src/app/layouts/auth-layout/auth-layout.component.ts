import { AuthCred } from './../../services/interfaces';
import { AuthService } from './../../services/auth.service';
import { Subscription } from 'rxjs';
import { UIService } from './../../services/ui.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css']
})
export class AuthLayoutComponent implements OnInit, OnDestroy {

  isMobile: boolean;
  loginForm: FormGroup;
  registerForm: FormGroup;

  password = true;
  conPassword = true;
  loginView = true;
  mobileViewSubscription: Subscription;
  constructor(
    private route: Router,
    private UIService: UIService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    localStorage.removeItem('token')
    this.mobileViewSubscription = this.UIService.mobileView.subscribe(res => {
      this.isMobile = res;
    });

    this.UIService.isMobile();

    // reactive form definition
    this.loginForm = new FormGroup({
      email: new FormControl('nishanths.17it@kongu.edu', [Validators.required, Validators.email]),
      password: new FormControl('nishanth', [Validators.required, Validators.minLength(8)])
    });

    this.registerForm = new FormGroup({
      email: new FormControl('nishanths.17it@kongu.edu', [Validators.required, Validators.email]),
      password: new FormControl('nishanth', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('nishanth', [Validators.required, Validators.minLength(8), this.confirmPassword.bind(this)]),
    });
  }

  confirmPassword(control: FormGroup) {
    if (this.registerForm) {
      if (control.value !== this.registerForm.value.password) {
        return { mismatch: true };
      }
      return null;
    }
  }

  mobileView() {
    this.UIService.isMobile();

  }

  login(form: FormGroup) {
    if (form.invalid) { return; }
    const loginCred: AuthCred = {
      email: form.value.email,
      password: form.value.password,
    };

    this.authService.login(loginCred).subscribe(res => {
      console.log(res);
      this.route.navigate(['/']);
    }, err => {
      this.UIService.errorMessage(err.error.message);
    });
    // form.reset();
    // this.route.navigate(['/']);
  }

  register(form: FormGroup) {

    if (form.invalid) { return; }

    const regCred: AuthCred = {
      email: form.value.email,
      password: form.value.password,
      confirmPassword: form.value.confirmPassword,
    };

    this.authService.register(regCred).subscribe(res => {
      console.log(res);
      this.UIService.otpDialog();
    }, err => {
      this.UIService.errorMessage(err.error.message);
      console.log(err.error.message);
    });
  }

  ngOnDestroy(): void {
    this.mobileViewSubscription.unsubscribe();
  }
}
