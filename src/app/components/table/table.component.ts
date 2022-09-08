import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Owner from 'src/app/models/owner';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }

  @Input() tableHeader: Array<Object>;
  @Input() tableBody: Array<Owner>;
  @Input() tableIgnoredColumns: Array<Object>;
  @Output() expandButtonClicked = new EventEmitter<number>();
  @Output() editButtonClicked = new EventEmitter<number>();
  @Output() deleteButtonClicked = new EventEmitter<number>();
  openActionMenuIndex: number; 

  tableActionOptions = [{
    icon: 'edit',
    label: 'Edit registry',
    onClick: (id: number) => this.editButtonClicked.emit(id),
  },
  {
    icon: 'delete',
    label: 'Delete Registry',
    onClick: (id: number) => this.deleteButtonClicked.emit(id),
  }]
  
  ngOnInit() {
  }

  getOwnerData(id: string, data: string): string {
    const owner = this.tableBody.find(owner => owner.id === id);
    if (owner) {
      return owner[data];
    }
    return 'Nenhum dono encontrado';
  }

  handleExpandButtonClick(id: number): void {
    this.expandButtonClicked.emit(id);
  }

  handleEditButtonClick(id: number): void {
    this.editButtonClicked.emit(id);
  }

  handleDeleteButtonClick(id: number): void {
    this.deleteButtonClicked.emit(id);
  }

  openActionsMenu(index: number): void {
    this.openActionMenuIndex = index;
  }

}
