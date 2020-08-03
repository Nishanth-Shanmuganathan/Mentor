import { ConnectionService } from './../../services/connection.service';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from './../../services/notification.service';
import { Component, OnInit } from '@angular/core';
import { UIService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notifications;
  sent = 0;
  received = 0;
  isMobile: boolean;
  constructor(
    private notificationService: NotificationService,
    private uiService: UIService,
    private authService: AuthService,
    private connectionService: ConnectionService
  ) { }

  ngOnInit(): void {
    this.authService.userSubscription.subscribe(res => {
      this.sent = 0;
      this.received = 0;
      this.notifications = res?.notifications;
      this.notifications = this.notificationService.getNotifications();
      if (this.notifications?.length) {
        this.notifications.forEach(element => {
          if (element.action === 'sent') {
            this.sent++;
          } else if (element.action === 'received') {
            this.received++;
          }
        });
      }
    });

    this.notifications = this.notificationService.getNotifications();

    this.uiService.mobileView.subscribe(res => {
      this.isMobile = res;
    });

  }

  withdraw(connectionId) {
    this.connectionService.withdraw(connectionId)
      .subscribe(res => {
        this.authService.user = res.user;
        this.authService.userSubscription.next(res.user);
        this.uiService.errorMessage(res.message);
      }, err => {
        console.log(err);
        this.uiService.errorMessage(err.error.message);
      });
  }

  accept(connectionId) {
    this.connectionService.accept(connectionId)
      .subscribe(res => {
        this.authService.user = res.user;
        this.authService.userSubscription.next(res.user);
        this.uiService.errorMessage(res.message);
      }, err => {
        console.log(err);
        this.uiService.errorMessage(err.error.message);
      });
  }

  reject(connectionId) {
    this.connectionService.reject(connectionId)
      .subscribe(res => {
        this.authService.user = res.user;
        this.authService.userSubscription.next(res.user);
        this.uiService.errorMessage(res.message);
      }, err => {
        console.log(err);
        this.uiService.errorMessage(err.error.message);
      });
  }
}
