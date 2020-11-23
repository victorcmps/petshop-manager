import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Pet from '../models/Pet';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(private http: HttpClient) { }

  getAllPets() {
    return this.http.get<Pet[]>(`/pets`);
  }

  getPet(id) {
    return this.http.get<Pet>(`/pets/${id}`);
  }

  createPet(pet) {
    return this.http.post<Pet>(`/pets`, pet);
  }

  updatePet(id, pet) {
    return this.http.put<Pet>(`/pets/${id}`, pet);
  }

  deletePet(id) {
    return this.http.delete<number>(`/pets/${id}`);
  }
}