import { NotificationService } from './../../services/notification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notifications;
  constructor(
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.notifications = this.notificationService.getNotifications().reverse();
  }

}
