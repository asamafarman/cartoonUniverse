import { Component, OnInit } from '@angular/core';
import { Character } from '@app/shared/components/interfaces/character.interface';
import { Hero } from '@app/shared/components/interfaces/hero';
import { CharacterService } from '@app/shared/services/character.service';
import { HeroService } from '@app/shared/services/hero.service';
import { MarvelService } from '@app/shared/services/marvel.service';
import { Observable, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService,
    private marvelService: MarvelService,
    private characterSvc: CharacterService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  getMarvelImage(heroName: string): void {
    this.marvelService.getHeroImage(heroName)
      .subscribe(response => {
        const results = response.data.results;
        if (results.length > 0) {
          const hero = results[0];
          const thumbnail = hero.thumbnail;
          const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;
          const existingHero = this.heroes.find(h => h.name === heroName);
          if (existingHero) {
            existingHero.image = imageUrl;
          }
        }
      });
  }

  getRickMortyImage(characterName: string): void {
    this.characterSvc.getCharacterImage(characterName)
      .subscribe(response => {
        const results = response.results;
        if (results.length > 0) {
          const character = results[0];
          const imageUrl = character.image;
          const existingCharacter = this.heroes.find(h => h.name === characterName);
          if (existingCharacter) {
            existingCharacter.image = imageUrl;
          }
        }
      });
  }

}

