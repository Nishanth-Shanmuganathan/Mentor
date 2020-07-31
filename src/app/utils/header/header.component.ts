import { UIService } from './../../services/ui.service';
import { User } from 'src/app/services/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggle = new EventEmitter();
  @Input() icon: boolean;
  user: User;
  constructor(
    private authService: AuthService,
    private uiService: UIService
  ) { }

  ngOnInit(): void {
    this.user = this.authService.user;
    this.authService.userSubscription.subscribe(res => {
      this.user = res;
    });
  }
  emitSideBarToggle() {
    this.toggle.emit();
  }
  openProfile(userId: string) {
    this.uiService.openProfileModel(userId);
  }
}
