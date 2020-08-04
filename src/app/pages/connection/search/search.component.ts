import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/services/interfaces';
import { ConnectionService } from 'src/app/services/connection.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  connections: User[];
  filteredConnections: User[];
  countries: string[];
  username: string;
  location: string;
  connectionSubscription: Subscription;


  constructor(
    private connectionService: ConnectionService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.connectionSubscription = this.connectionService.connectionSubscription.subscribe(res => {
      this.connections = res;
      this.filteredConnections = this.connections;
    });
    this.connectionService.fetchConnections();
  }

  fetchPlaces(value) {
    if (!value) { return; }
    this.authService.countriesList(value).then(res => {
      this.countries = res;
    });
  }

  filterResults() {
    this.filteredConnections = this.connections.filter(connection => {
      if (this.username && connection.username.toLowerCase().includes(this.username.toLowerCase())) { return true; }
      if (this.location && connection.city.toLowerCase() === this.location.toLowerCase()) { return true; }
      if (!this.username && !this.location) { return true; }
    });
  }

  ngOnDestroy() {
    this.connectionSubscription.unsubscribe();
  }
}
