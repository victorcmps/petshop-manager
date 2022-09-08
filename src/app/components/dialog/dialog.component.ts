import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor() { }

  @Input() open: boolean;
  @Input() title: string;
  @Output() openChange = new EventEmitter<boolean>();

  ngOnInit() {
  }

  closeMenu() {
    this.open = false;
    this.openChange.emit(this.open);
  }

}
