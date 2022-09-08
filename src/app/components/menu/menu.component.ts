import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  activeRoute = window.location.pathname;

  @Input() menuItems: Array<Object>;

  constructor(private router: Router, location: Location, private auth: AuthService) { 
    router.events.subscribe(() => {
      this.activeRoute = location.path();
    });
}
  ngOnInit() {

  }

  logout() {
    this.auth.logout();
  }
}
