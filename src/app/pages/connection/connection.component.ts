import { AuthService } from 'src/app/services/auth.service';
import { User } from './../../services/interfaces';
import { ConnectionService } from './../../services/connection.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {


  constructor(
  ) { }

  ngOnInit(): void {
  }

}
