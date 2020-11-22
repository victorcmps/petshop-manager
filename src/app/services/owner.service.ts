import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Owner from '../models/owner';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private http: HttpClient) { }

  getOwners() {
    return this.http.get<Owner[]>(`/owner`);
  }
}


