import { Observable, of } from 'rxjs';
import { LoadingService } from '../app/services/loading.service'
import { AuthService } from './services/auth.service';
import { Component, OnInit, ChangeDetectorRef, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentChecked {
  title = 'pets';

  loading$: Observable<boolean>;

  menuItems = [{
    icon: 'pets',
    label: 'Pets',
    route: '/pets',
  },
  {
    icon: 'person',
    label: 'Owners',
    route: '/owners',
  },
  {
    icon: 'logout',
    label: 'Logout',
    route: '/logout',
    logout: true
  }]

  constructor(private loading: LoadingService, private auth: AuthService, private changeDetector: ChangeDetectorRef,) { }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  ngOnInit() {
    this.loading.loading$.subscribe(loading => {
      this.loading$ = of(loading);
    })
  }
}


