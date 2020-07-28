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
  constructor(
    private connectionService: ConnectionService
  ) { }

  ngOnInit(): void {
  }

  sendReq(id: string) {
    this.connectionService.sendConnectionRequest(id);
  }

}
