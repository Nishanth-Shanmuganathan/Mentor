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
export class AuthLayoutComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
