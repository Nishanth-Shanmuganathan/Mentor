import { ErrorComponent } from './../utils/error/error.component';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { SideNav } from './interfaces';
import { MatDialog } from '@angular/material/dialog';
import { OtpComponent } from '../layouts/auth-layout/otp/otp.component';


@Injectable({
  providedIn: 'root'
})

export class UIService {
  mobileView = new BehaviorSubject<boolean>(window.innerWidth < 700);
  currentView: boolean = undefined;

  constructor(
    private dialog: MatDialog
  ) { }


  isMobile() {
    const incomingViewChange = window.innerWidth < 700;
    if (this.currentView === undefined || this.currentView !== incomingViewChange) {
      this.currentView = incomingViewChange;
      return this.mobileView.next(window.innerWidth < 700);
    }
  }
  getNavigation(): SideNav[] {
    if (true) {
      return [
        { name: 'Queries', icon: 'contact_support', link: '/' },
        { name: 'Messaging', icon: 'message', link: '/messaging' },
        { name: 'Connections', icon: 'group', link: '/connections' },
        { name: 'Projects', icon: 'construction', link: '/projects' },
        { name: 'Groups', icon: 'connect_without_contact', link: '/groups' },
      ];
    }
  }
  getFixedNavigation(): SideNav[] {
    if (true) {
      return [
        { name: 'Payments', icon: 'payments', link: 'payments' },
        { name: 'Notifications', icon: 'notifications', link: 'notifications' },
        { name: 'Settings', icon: 'settings', link: 'settings' }
      ];
    }
  }

  errorMessage(val: string) {
    this.dialog.open(ErrorComponent,
      {
        width: 'fit-content',
        minWidth: '250px',
        height: 'fit-content',
        hasBackdrop: false,
        position: { top: '10px', right: '10px' },
        disableClose: true,
        data: val
      });
  }

  otpDialog() {
    this.dialog.open(OtpComponent, { disableClose: true });
  }

  closeModals() {
    this.dialog.closeAll();
  }
}
