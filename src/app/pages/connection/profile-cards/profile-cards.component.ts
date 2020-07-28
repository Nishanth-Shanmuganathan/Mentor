import { User } from './../../../services/interfaces';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-cards',
  templateUrl: './profile-cards.component.html',
  styleUrls: ['./profile-cards.component.css']
})
export class ProfileCardsComponent implements OnInit {

  @Input() connection: User;
  constructor() { }

  ngOnInit(): void {
  }

}
