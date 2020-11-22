import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoadingService } from '../app/services/loading.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pets';

  loading$: Observable<boolean>; 

  constructor(private loading: LoadingService) {}

  ngOnInit() {
    this.loading.loading$.subscribe(loading => {
      this.loading$ = of(loading);
    })
  }
}


