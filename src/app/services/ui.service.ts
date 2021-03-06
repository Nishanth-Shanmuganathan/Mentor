import { ConnectionService } from 'src/app/services/connection.service';
import { ProfileComponent } from './../utils/profile/profile.component';
import { ErrorComponent } from './../utils/error/error.component';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
    private dialog: MatDialog,
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
        { name: 'Queries', icon: 'contact_support', link: 'queries' },
        // { name: 'Messaging', icon: 'message', link: 'null' },
        // { name: 'Messaging', icon: 'message', link: 'messaging' },
        { name: 'Connections', icon: 'group', link: 'connections' },
        // { name: 'Projects', icon: 'construction', link: 'projects' },
        // { name: 'Projects', icon: 'construction', link: 'null' },
        // { name: 'Groups', icon: 'connect_without_contact', link: 'groups' },
        // { name: 'Groups', icon: 'connect_without_contact', link: 'null' },
      ];
    }
  }
  getFixedNavigation(): SideNav[] {
    if (true) {
      return [
        // { name: 'Payments', icon: 'payments', link: 'null' },
        // { name: 'Payments', icon: 'payments', link: 'payments' },
        { name: 'Notifications', icon: 'notifications', link: 'notifications' },
        // { name: 'Settings', icon: 'settings', link: 'null' }
        // { name: 'Settings', icon: 'settings', link: 'settings' }
      ];
    }
  }

  errorMessage(val: string = 'An unknown error occurred.') {
    this.closeModals();
    this.dialog.open(ErrorComponent,
      {
        width: 'fit-content',
        minWidth: '250px',
        height: 'fit-content',
        hasBackdrop: true,
        position: { top: '10px', right: '10px' },
        data: val
      });
  }

  otpDialog() {
    this.closeModals();
    this.dialog.open(OtpComponent, { disableClose: true });
  }

  closeModals() {
    this.dialog.closeAll();
  }

  openProfileModel(userId: string) {
    this.dialog.open(ProfileComponent, {
      width: '90vw',
      minWidth: '300px',
      maxWidth: '500px',
      height: 'fit-content',
      hasBackdrop: true,
      data: {
        userId
      }
    });
  }
}
