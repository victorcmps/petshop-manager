import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Owner from '../models/owner';
import Pet from '../models/Pet';

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

  getPets(id) {
    return this.http.get<Pet[]>(`/owner/${id}/pets`);
  }
    
  createOwner(owner) {
    return this.http.post<Owner>(`/owner`, owner);
  }

  updateOwner(id, owner) {
    return this.http.put<Owner>(`/owner/${id}`, owner);
  }

  deleteOwner(id) {
    return this.http.delete<number>(`/owner/${id}`);
  }
}


