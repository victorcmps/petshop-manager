import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { combineLatest } from 'rxjs';
import Owner from 'src/app/models/owner';
import Pet from 'src/app/models/Pet';
import { OwnersService } from 'src/app/services/owner.service';
import { PetsService } from 'src/app/services/pets.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})



export class PetsComponent implements OnInit {
  pets$ = new Subject<Pet[]>();
  owners$: Array<Owner>;
  enableAddRegistry: boolean;
  idEdit: number;
  enableEdit: boolean;
  form: FormGroup;
  speciesEnum: Array<Object> = [
    { id: 1, name: 'Cachorro' },
    { id: 2, name: 'Gato' }
  ];
  comboBreed: (string | number)[];

  constructor(
    private pets: PetsService,
    private owner: OwnersService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog) {
    this.form = new FormGroup({
      id: new FormControl(''),
      createdAt: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      nickName: new FormControl('', [Validators.required]),
      ownerId: new FormControl(''),
      breed: new FormControl('', [Validators.required]),
      size: new FormControl(''),
      birthday: new FormControl(''),
      species: new FormControl('', [Validators.required])
    })
  }

  ngOnInit() {
    combineLatest(this.pets.getAllPets(), this.owner.getAllOwners()).subscribe(([pets, owners]) => {
      this.pets$.next(pets);
      this.comboBreed = pets.map(pet => pet.breed);
      this.owners$ = owners;
    });
  }

  addPet() {
    this.enableAddRegistry = true;
    document.documentElement.scrollTop = 0;
  }

  createPet() {
    this.pets.createPet(this.form.value).subscribe(owner => {
      this._snackBar.open('Pet criado!', 'X', {
        duration: 4000,
      });
      this.enableAddRegistry = false;
      this.ngOnInit();
    });
  }


  editPet(id: number): void {
    this.pets.getPet(id).subscribe(pet => {
      this.form.patchValue({
        id: pet.id,
        createdAt: pet.id,
        name: pet.name,
        nickName: pet.nickName,
        ownerId: pet.ownerId,
        breed: pet.breed,
        species: pet.species
      })
    })
    this.idEdit = id;
    this.enableEdit = true;
    console.log(this.form);
  }

  updatePet(id: number): void {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.pets.updatePet(id, this.form.value).subscribe(pet => {
          this._snackBar.open('Pet alterado!', 'X', {
            duration: 4000,
          });
          this.ngOnInit();
          this.idEdit = 0;
          this.enableEdit = false;
        });
      }
    });
  } 

  deletePet(id) {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.pets.deletePet(id).subscribe(pet => {
          this._snackBar.open('Pet deletado!', 'X', {
            duration: 4000,
          });
          this.ngOnInit();
        });
      }
    });
  }

  getOwnerData(id, data): string {
    const owner = this.owners$.find(owner => owner.id === id);
    if (owner) {
      return owner[data];
    } else {
      return '';
    }
  }

}
