import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


const url = 'https://swapi.dev/api';

export interface Personagem {
  id: number;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  filmsData: any[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class PersonagensService {

  selectedPersonagem: Personagem;

  constructor(private http: HttpClient) {

  }

  getPersonagensList(page = 1): Observable<any> {
    return this.http.get(`${url}/people/?page=${page}`)
  }

  getPersonagensDetails(urlPersonagem): Observable<any> {
    return this.http.get(`${urlPersonagem}`)
  }



}

