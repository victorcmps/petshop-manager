import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Subject } from 'rxjs';
import Pet from 'src/app/models/Pet';
import { OwnersService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-owners-details',
  templateUrl: './owners-details.component.html',
  styleUrls: ['./owners-details.component.scss']
})
export class OwnersDetailsComponent implements OnInit {

  owner$ = new Object();
  ownerPets$ = new Subject<Pet[]>();

  constructor(private activatedRoute: ActivatedRoute, private owner: OwnersService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      combineLatest(this.owner.getOwner(params.get("id")),this.owner.getPets(params.get("id"))).subscribe(([owner, pets]) => {
        this.owner$ = owner;
        this.ownerPets$.next(pets);
        console.log(pets);
      })
    })
  }

  closeModal() {
    return this.router.navigate([{ outlets: { modal: null } }]);
  }

}
