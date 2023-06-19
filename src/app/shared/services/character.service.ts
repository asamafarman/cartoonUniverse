import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Character } from '../components/interfaces/character.interface';
import { environment } from 'src/environment';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient ) { }

  //Clash Royale API
  // getCharacters(){
  //   const headers = new HttpHeaders().set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjI4NDQ2MWIzLWEyMjMtNDNhZS04NTQwLWQ4Njg0YTc1MzRhMSIsImlhdCI6MTY4NjkzMjE2NSwic3ViIjoiZGV2ZWxvcGVyLzRiMzdlNzU0LTQyN2YtZGM3OC1mNDc0LWZhOWU5YmVkZTA5MyIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI1NC44Ni41MC4xMzkiLCIxODUuMTA1LjM5LjExIl0sInR5cGUiOiJjbGllbnQifV19.Wg1d5tdByZkiegpkhr5qp0oNtewo12abwdEbrivfxXI01fpmI2sq7WlYBfD3MVIYkpmSmW4felSe0cJyw-VAhw');
  //   return this.http.get<Character[]>(`${environment.baseUrlApi}/cards`, { headers })
  // }

  searchCharacters(query = '', page = 1){
    const filter = `${environment.baseUrlApi}/?name=${query}&page=${page}`
    return this.http.get<Character[]>(filter)
  }


  getDetails(id:number){
    return this.http.get<Character>(`${environment.baseUrlApi}/${id}`)
  }
}
