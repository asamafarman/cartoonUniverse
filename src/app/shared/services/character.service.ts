import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Character } from '../components/interfaces/character.interface';
import { environment } from 'src/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient ) { }

  searchCharacters(query = '', page = 1){
    const filter = `${environment.baseUrlApi}/?name=${query}&page=${page}`
    return this.http.get<Character[]>(filter)
  }


  getDetails(id:number){
    return this.http.get<Character>(`${environment.baseUrlApi}/${id}`)
  }

  getCharacterImage(heroName: string): Observable<any> {
    const url = `https://rickandmortyapi.com/api/character/?name=${heroName}`;
    return this.http.get(url);
  }
}
