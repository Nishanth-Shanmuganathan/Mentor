import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  otp1: string;
  otp2: string;
  otp3: string;
  otp4: string;
  otp5: string;
  otp6: string;
  clear = true;

  constructor(
    private authService: AuthService,
    private route: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  checkOtp() {
    const otp = this.otp1 + this.otp2 + this.otp3 + this.otp4 + this.otp5 + this.otp6;
    if (otp.length === 6) {
      this.clear = false;
      this.authService.checkOtp(otp).subscribe(res => {
        this.clear = true;
        this.dialog.closeAll();
        this.route.navigate(['/']);
      }, err => {
        this.clear = true;
      });
    }
  }

  changeFocus(ele: HTMLInputElement) {
    ele.focus();
  }

  resendOtp() {
    this.clear = false;
    this.authService.resendOtp().subscribe(res => {
      this.clear = true;
    }, err => {
      this.clear = true;
    });
  }
}
