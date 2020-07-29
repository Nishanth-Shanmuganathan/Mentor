import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
import { UIService } from 'src/app/services/ui.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SideNav } from 'src/app/services/interfaces';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit, OnDestroy {
  data: SideNav[];
  fixedData: SideNav[];
  isMobile: boolean;
  mobileViewSubscription: Subscription;
  constructor(
    private uiService: UIService,
    private authService: AuthService
  ) {

  }

  ngOnInit(): void {
    this.data = this.uiService.getNavigation();
    this.fixedData = this.uiService.getFixedNavigation();
    this.mobileViewSubscription = this.uiService.mobileView.subscribe(isMobile => {
      this.isMobile = isMobile;
    });
  }

  ngOnDestroy() {
    if (this.mobileViewSubscription) {
      this.mobileViewSubscription.unsubscribe();
    }
  }

  logout() {
    this.authService.logout()
      .subscribe(res => {
        this.uiService.errorMessage(res.message);
      }, err => {
        console.log(err);
        this.uiService.errorMessage(err.error.message);
      });
  }
}
