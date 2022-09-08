import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-menu',
  templateUrl: './action-menu.component.html',
  styleUrls: ['./action-menu.component.scss']
})
export class ActionMenuComponent implements OnInit {

  constructor() { }

  @Input() options: Array<Object>;

  @Input() index: any;

  ngOnInit() {
  }

}
