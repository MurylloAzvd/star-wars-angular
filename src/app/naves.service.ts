import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'https://swapi.dev/api';

export interface Nave {
  id: number;
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})

export class NavesService {

  selectedNave: Nave;

  constructor(private http: HttpClient) { }

  getNavesList(page = 1): Observable<any> {
    return this.http.get(`${url}/starships/?page=${page}`)
  }

  getNavesDetails(urlNave): Observable<any> {
    return this.http.get(`${urlNave}`)
  }

}

