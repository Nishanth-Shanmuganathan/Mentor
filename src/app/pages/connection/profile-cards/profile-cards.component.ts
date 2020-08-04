import { AuthService } from 'src/app/services/auth.service';
import { UIService } from 'src/app/services/ui.service';
import { ConnectionService } from './../../../services/connection.service';
import { User } from './../../../services/interfaces';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-cards',
  templateUrl: './profile-cards.component.html',
  styleUrls: ['./profile-cards.component.css']
})
export class ProfileCardsComponent implements OnInit {

  @Input() connection: User;
  @Input() self = false;
  constructor(
    private connectionService: ConnectionService,
    private authService: AuthService,
    private uiService: UIService
  ) { }

  ngOnInit(): void {
  }

  sendReq(id: string) {
    this.connectionService.sendConnectionRequest(id)
      .subscribe(res => {
        this.authService.user = res.user;
        this.authService.userSubscription.next(res.user);
        const receiverIndex = this.connectionService.connections.findIndex(connection => connection._id === id);
        this.connectionService.connections.splice(receiverIndex, 1);
        this.uiService.errorMessage(res.message);
        this.connectionService.connectionSubscription.next(this.connectionService.connections);
      }, err => {
        // console.log(err);
        this.uiService.errorMessage(err.error.message);
      });
  }

  remove(id: string) {
    this.connectionService.remove(id)
      .subscribe(res => {
        // console.log(res.user);
        this.authService.user = res.user;
        this.authService.userSubscription.next(res.user);
        this.connectionService.connectionSubscription.next(res.userConnections);
        this.uiService.errorMessage(res.message);
      }, err => {
        // console.log(err);
        this.uiService.errorMessage(err.error.message);
      });
  }

  openProfile(userId: string) {
    this.uiService.openProfileModel(userId);
  }

}
