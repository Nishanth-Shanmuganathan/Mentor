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
    private uiService: UIService
  ) { }

  ngOnInit(): void {
  }

  sendReq(id: string) {
    this.connectionService.sendConnectionRequest(id);
  }

  remove(id: string) {
    this.connectionService.remove(id);
  }

  openProfile(userId: string) {
    this.uiService.openProfileModel(userId);
  }

}
