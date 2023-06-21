import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  private apiKey = '8f26d49f6e6b7d530951f9efff0c8e92';
  private hash = '4471c8359ed151211e64949d22e0b411';

  constructor(private http: HttpClient) { }

  getHeroImage(heroName: string): Observable<any> {
    const url = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${heroName}&ts=1000&apikey=${this.apiKey}&hash=${this.hash}`;
    return this.http.get(url);
  }
}
