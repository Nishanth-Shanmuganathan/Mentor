import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SideNav } from './interfaces';


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
}
