import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoadingService } from '../app/services/loading.service'
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pets';

  loading$: Observable<boolean>; 

  constructor(private loading: LoadingService, private auth: AuthService) {}

  ngOnInit() {
    this.loading.loading$.subscribe(loading => {
      this.loading$ = of(loading);
    })
  }
}


