import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  
  canActivate(): Observable<boolean> {
    return this.checkLogin();
  }

  checkLogin(): Observable<boolean> {
    const user = localStorage.getItem('token');
    if (user) {
      return of(true);
    } else {
      this.router.navigate(['']);
      return of(false);
    }
  }
}
