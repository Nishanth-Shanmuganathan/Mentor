import { AuthService } from './../../services/auth.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  @ViewChild('next0') firstInput: ElementRef;
  otp1: string;
  otp2: string;
  otp3: string;
  otp4: string;
  otp5: string;
  otp6: string;
  clear = false;
  error = false;

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
      this.error = false;
      this.authService.checkOtp(otp).subscribe(res => {
        this.clear = true;
        this.dialog.closeAll();
        this.route.navigate(['/']);
      }, err => {
        this.otp1 = null;
        this.otp2 = null;
        this.otp3 = null;
        this.otp4 = null;
        this.otp5 = null;
        this.otp6 = null;
        this.clear = true;
        this.error = true;
        this.firstInput.nativeElement.focus();
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
