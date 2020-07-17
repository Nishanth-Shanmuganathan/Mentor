import { UIService } from 'src/app/services/ui.service';
import { Component, OnInit } from '@angular/core';

interface SideNav {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  data: SideNav[];
  fixedData: SideNav[];
  isMobile: boolean;
  constructor(
    private uiService: UIService
  ) {

  }

  ngOnInit(): void {
    this.data = this.uiService.getNavigation();
    this.fixedData = this.uiService.getFixedNavigation();
    this.uiService.mobileView.subscribe(res => {
      this.isMobile = res;
    });
    this.uiService.isMobile();
  }


}
