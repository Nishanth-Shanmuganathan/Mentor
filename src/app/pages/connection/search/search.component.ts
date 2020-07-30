import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/services/interfaces';
import { ConnectionService } from 'src/app/services/connection.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  connections: User[];
  filteredConnections: User[];
  countries: string[];
  username: string;
  location: string;


  constructor(
    private connectionService: ConnectionService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.connectionService.connectionSubscription.subscribe(res => {
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
}
