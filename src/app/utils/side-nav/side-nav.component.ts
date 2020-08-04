import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
import { UIService } from 'src/app/services/ui.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SideNav } from 'src/app/services/interfaces';
import { NotificationService } from 'src/app/services/notification.service';
import { User } from './../../services/interfaces';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit, OnDestroy {
  data: SideNav[];
  fixedData: SideNav[];
  user: User;
  isMobile: boolean;
  mobileViewSubscription: Subscription;
  userSubscription: Subscription;
  notifications: number;
  constructor(
    private uiService: UIService,
    private authService: AuthService,
    private notificationService: NotificationService,
    private route: Router
  ) {

  }

  ngOnInit(): void {
    this.data = this.uiService.getNavigation();
    this.fixedData = this.uiService.getFixedNavigation();
    this.mobileViewSubscription = this.uiService.mobileView.subscribe(isMobile => {
      this.isMobile = isMobile;
    });

    this.userSubscription = this.authService.userSubscription.subscribe(res => {
      this.user = res;
      let sent = 0;
      let received = 0;
      let notifications = res?.notifications;
      notifications = this.notificationService.getNotifications();
      if (notifications?.length) {
        notifications.forEach(element => {
          if (element.action === 'sent') {
            sent++;
          } else if (element.action === 'received') {
            received++;
          }
        });
        this.notifications = sent + received;
        console.log(this.notifications);
      }
    });
  }

  openProfile(userId: string) {
    this.uiService.openProfileModel(userId);
  }

  ngOnDestroy() {
    if (this.mobileViewSubscription) {
      this.mobileViewSubscription.unsubscribe();
    }
    this.userSubscription.unsubscribe();
  }


  logout() {
    this.authService.logout()
      .subscribe(res => {
        this.uiService.errorMessage(res.message);
      }, err => {
        console.log(err);
        localStorage.clear();
        this.authService.isAuth.next(false);
        this.authService.user = null;
        this.authService.userSubscription.next(this.authService.user);
        this.route.navigate(['auth']);
      });
  }
}
