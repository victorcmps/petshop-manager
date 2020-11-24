import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  activeRoute = window.location.pathname;

  constructor(router: Router, location: Location) { 
    router.events.subscribe(val => {
      this.activeRoute = location.path();
    });
}
  ngOnInit() {

  }

}
