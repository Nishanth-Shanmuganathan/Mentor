import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { UIService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mentor-layout',
  templateUrl: './mentor-layout.component.html',
  styleUrls: ['./mentor-layout.component.css']
})
export class MentorLayoutComponent implements OnInit, OnDestroy {
  isMobile: boolean;
  mobileViewSubscription: Subscription;
  constructor(
    private uiService: UIService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.mobileViewSubscription = this.uiService.mobileView.subscribe(isMobile => {
      this.isMobile = isMobile;
    });

    this.authService.getUser();
  }

  mobileView() {
    this.uiService.isMobile();
  }

  ngOnDestroy(): void {
    if (this.mobileViewSubscription) {
      this.mobileViewSubscription.unsubscribe();
    }
  }


}
