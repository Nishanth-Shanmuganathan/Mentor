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
  isMobile: boolean;
  constructor(
    private notificationService: NotificationService,
    private uiService: UIService,
    private authService: AuthService,
    private connectionService: ConnectionService
  ) { }

  ngOnInit(): void {
    this.authService.userSubscription.subscribe(res => {
      this.notifications = res?.notifications;
      console.log(this.notifications);
    });
    this.notifications = this.notificationService.getNotifications();
    this.uiService.mobileView.subscribe(res => {
      this.isMobile = res;
    });

  }

  withdraw(connectionId) {
    this.connectionService.withdraw(connectionId);
  }

  accept(connectionId) {
    this.connectionService.accept(connectionId);
  }

  reject(connectionId) {
    this.connectionService.reject(connectionId);
  }
}
