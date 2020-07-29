import { AuthService } from 'src/app/services/auth.service';
import { UIService } from 'src/app/services/ui.service';
import { User } from './interfaces';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notifications;
  constructor(
    private http: HttpClient,
    private route: Router,
    private uiService: UIService,
    private authService: AuthService
  ) { }

  getNotifications() {
    if (this.authService.user) {
      this.notifications = this.authService.user.notifications;
      console.log(this.notifications);
    } else {
      console.log('User illa');
    }
    return this.notifications;
  }
}
