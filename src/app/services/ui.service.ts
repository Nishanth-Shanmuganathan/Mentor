import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface SideNav {
  name: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})

export class UIService {
  mobileView = new Subject<boolean>();
  constructor() { }


  isMobile() {
    return this.mobileView.next(window.innerWidth < 700);
  }
  getNavigation(): SideNav[] {
    if (true) {
      return [
        { name: 'Connections', icon: 'group' },
        { name: 'Queries', icon: 'contact_support' },
        { name: 'Projects', icon: 'construction' },
        { name: 'Groups', icon: 'connect_without_contact' },
      ];
    }
  }
  getFixedNavigation(): SideNav[] {
    if (true) {
      return [
        { name: 'Payments', icon: 'payments' },
        { name: 'Notifications', icon: 'notifications' },
        { name: 'Settings', icon: 'settings' }
      ];
    }
  }
}
