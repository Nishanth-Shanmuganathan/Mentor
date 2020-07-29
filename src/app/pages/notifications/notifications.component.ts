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
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.userSubscription.subscribe(res => {
      this.notifications = this.notificationService.getNotifications()?.reverse();
    });
    this.notifications = this.notificationService.getNotifications()?.reverse();
    this.uiService.mobileView.subscribe(res => {
      this.isMobile = res;
    });

  }

}
