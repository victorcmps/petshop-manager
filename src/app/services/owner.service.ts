import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Owner from '../models/owner';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {

  constructor(private http: HttpClient) { }

  getAllOwners() {
    return this.http.get<Owner[]>(`/owner`);
  }

  getOwner(id) {
    return this.http.get<Owner>(`/owner/${id}`);
  }
}


