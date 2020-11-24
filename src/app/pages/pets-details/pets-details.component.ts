import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import Owner from 'src/app/models/owner';
import Pet from 'src/app/models/Pet';
import { OwnersService } from 'src/app/services/owner.service';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-pets-details',
  templateUrl: './pets-details.component.html',
  styleUrls: ['./pets-details.component.scss']
})
export class PetsDetailsComponent implements OnInit {
  pet = new Object();
  owner = new Object();

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private pets: PetsService, private owners: OwnersService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.pets.getPet(params.get("id")).subscribe(pet => {
        this.pet = pet;
        this.owners.getOwner(pet.ownerId).subscribe(owner => {
          this.owner = owner;
        })
      })
    });
  }

  closeModal() {
      return this.router.navigate([{ outlets: { modal: null } }]);
  }

}
