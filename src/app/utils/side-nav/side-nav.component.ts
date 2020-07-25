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

  mobileSubscription: Subscription;
  constructor(
    private uiService: UIService
  ) {

  }

  ngOnInit(): void {
    this.data = this.uiService.getNavigation();
    this.fixedData = this.uiService.getFixedNavigation();
    this.mobileSubscription = this.uiService.mobileView.subscribe(res => {
      this.isMobile = res;
    });
    this.uiService.isMobile();
  }

  ngOnDestroy() {
    this.mobileSubscription.unsubscribe();
  }

}
