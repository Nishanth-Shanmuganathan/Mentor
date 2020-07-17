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
  viewSubscription: Subscription;
  constructor(
    private uiService: UIService
  ) { }

  ngOnInit(): void {
    this.viewSubscription = this.uiService.mobileView.subscribe(res => {
      this.isMobile = res;
    });
    this.uiService.isMobile();
  }
  mobileView() {
    this.uiService.isMobile();

  }

  ngOnDestroy(): void {
    this.viewSubscription.unsubscribe();
  }


}
