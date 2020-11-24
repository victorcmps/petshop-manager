import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnersService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-owners-details',
  templateUrl: './owners-details.component.html',
  styleUrls: ['./owners-details.component.scss']
})
export class OwnersDetailsComponent implements OnInit {

  owner$ = new Object();

  constructor(private activatedRoute: ActivatedRoute, private owner: OwnersService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.owner.getOwner(params.get("id")).subscribe(owner => {
        this.owner$ = owner;
      })
    })
  }

  closeModal() {
    return this.router.navigate([{ outlets: { modal: null } }]);
  }

}
