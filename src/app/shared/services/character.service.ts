import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient ) { }

  searchCharacters(query ='', page = 1){
    return this.http.get<Character[]>(`${environment.baseUrlApi}/`)
  }
  getDetails(id:number){}
}
