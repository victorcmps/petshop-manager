import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import Owner from '../models/owner';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private logged = new Subject<boolean>();
  logged$ = this.logged.asObservable();

  constructor() { }

  login(owners: Owner[], email: string): boolean {
    const user = owners.filter(owner => owner.email === email)[0];

    if (user) {
      localStorage.setItem('token', user.email);
      return true;
    } else { 
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  loginStatus(status) {
    this.logged.next(status);
  }
}
