import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { UIService } from 'src/app/services/ui.service';
import { AuthService } from 'src/app/services/auth.service';
import { AuthCred } from 'src/app/services/interfaces';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isMobile: boolean;
  loginForm: FormGroup;
  registerForm: FormGroup;

  password = true;
  conPassword = true;
  loginView = true;
  mobileViewSubscription: Subscription;
  constructor(
    private route: Router,
    private uiService: UIService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    localStorage.clear();
    this.mobileViewSubscription = this.uiService.mobileView.subscribe(isMobile => {
      this.isMobile = isMobile;
    });


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
    this.uiService.isMobile();

  }

  login(form: FormGroup) {
    if (form.invalid) { return; }
    const loginCred: AuthCred = {
      email: form.value.email,
      password: form.value.password,
    };

    this.authService.login(loginCred).subscribe(res => {
      this.uiService.errorMessage('Login successful');
      this.route.navigate(['/']);
      form.reset();
    }, err => {
      form.reset();
      console.log(err);
      this.uiService.errorMessage(err.error.message);
    });
  }

  register(form: FormGroup) {

    if (form.invalid) { return; }

    const regCred: AuthCred = {
      email: form.value.email,
      password: form.value.password,
      confirmPassword: form.value.confirmPassword,
    };
    this.authService.register(regCred).subscribe(res => {
      this.uiService.otpDialog();
    }, err => {
      this.uiService.errorMessage(err.error.message);
    });
  }

  ngOnDestroy(): void {
    if (this.mobileViewSubscription) {
      this.mobileViewSubscription.unsubscribe();
    }
  }
}
