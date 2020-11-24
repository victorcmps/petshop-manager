import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import Owner from 'src/app/models/owner';
import { OwnersService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.scss']
})
export class OwnersComponent implements OnInit {

  constructor(private owner: OwnersService, private _snackBar: MatSnackBar, public dialog: MatDialog) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required])
    })
   }
  idEdit: number;
  enableAddRegistry: boolean;
  enableEdit: boolean;
  form: FormGroup;
  owners$ = new Subject<Owner[]>();

  ngOnInit() {
    this.owner.getAllOwners().subscribe(owners => {
      this.owners$.next(owners);
    });
  }

  addOwner() {
    if (this.enableEdit) {
      this.idEdit = 0;
      this.enableEdit = false;
      this.form.reset();
    }
    this.enableAddRegistry = true;
    document.documentElement.scrollTop = 0;
  }

  createOwner() {
    this.owner.createOwner(this.form.value).subscribe(owner => {
      this._snackBar.open('Dono criado!', 'X', {
        duration: 4000,
      });
      this.enableAddRegistry = false;
      this.ngOnInit();
    });
  }

  editOwner(id: number): void {
    if (this.enableAddRegistry) this.enableAddRegistry = false;
    this.owner.getOwner(id).subscribe(owner => {
      this.form.patchValue({
        name: owner.name,
        email: owner.email,
        phone: owner.phone
      })
    })
    this.idEdit = id;
    this.enableEdit = true;
  }

  updateOwner(id: number): void {
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.owner.updateOwner(id, this.form.value).subscribe(owner => {
          this._snackBar.open('Dono alterado!', 'X', {
            duration: 4000,
          });
          this.ngOnInit();
          this.idEdit = 0;
          this.enableEdit = false;
        });
      }
    });
  } 

  deleteOwner(id) {
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.owner.deleteOwner(id).subscribe(owner => {
          this._snackBar.open('Dono deletado!', 'X', {
            duration: 4000,
          });
          this.ngOnInit();
        });
      }
    });
  }
}