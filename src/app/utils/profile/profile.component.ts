import { Subscription } from 'rxjs';
import { ConnectionService } from './../../services/connection.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/services/interfaces';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { UIService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  connectedUser: boolean;
  user: User;
  owner = false;
  userId: string;
  countries: string[] = [];
  userSubscription: Subscription;
  constructor(
    private authService: AuthService,
    private connectionService: ConnectionService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: { userId: string }
  ) { }

  ngOnInit(): void {
    this.userId = this.data.userId;

    this.userSubscription = this.authService.userSubscription.subscribe(res => {
      const user = res;
      this.connectedUser = user?.connections.includes(this.userId);
      this.checkUserId(user, this.userId);
    });


  }

  checkUserId(head: User, incoming: string) {
    if (head?._id && incoming && head?._id !== incoming) {
      this.owner = false;
      this.authService.getParticularUser(incoming).subscribe(res => {
        this.user = res.user;
      }, err => {
        console.log(err);
      });
    } else {
      this.owner = true;
      this.user = head;
    }
  }
  sendReq(id: string) {
    this.connectionService.sendConnectionRequest(id);
  }

  remove(id: string) {
    this.connectionService.remove(id);
  }

  closeProfile() {
    this.dialog.closeAll();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
