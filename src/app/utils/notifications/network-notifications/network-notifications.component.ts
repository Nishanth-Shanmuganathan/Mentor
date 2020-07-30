import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-network-notifications',
  templateUrl: './network-notifications.component.html',
  styleUrls: ['./network-notifications.component.css']
})
export class NetworkNotificationsComponent implements OnInit {

  @Input() notification;
  @Output() withdraw = new EventEmitter<string>();
  @Output() accept = new EventEmitter<string>();
  @Output() reject = new EventEmitter<string>();
  constructor(
  ) { }

  ngOnInit(): void {

  }

  withdrawal(connectionId) {
    this.withdraw.emit(connectionId);
  }

  acceptance(connectionId) {
    this.accept.emit(connectionId);
  }

  rejection(connectionId) {
    this.reject.emit(connectionId);
  }
}
