import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggle = new EventEmitter();
  @Input() icon: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  emitSideBarToggle() {
    this.toggle.emit();
  }
}
