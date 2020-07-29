import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-network-notifications',
  templateUrl: './network-notifications.component.html',
  styleUrls: ['./network-notifications.component.css']
})
export class NetworkNotificationsComponent implements OnInit {

  @Input() notification
  constructor() { }

  ngOnInit(): void {
  }

}
