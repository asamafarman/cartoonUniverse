import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Superpower } from '@app/shared/components/interfaces/superpowers';
import { Hero } from '@app/shared/components/interfaces/hero';
import { HeroService } from '@app/shared/services/hero.service';
import { MarvelService } from '@app/shared/services/marvel.service';
import { CharacterService } from '@app/shared/services/character.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit{
  @Input() hero?: Hero;
  superpowersList: Superpower[] = [];
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private marvelService: MarvelService,
    private characterSvc: CharacterService
  ) {}

  ngOnInit(): void {
    this.getHero();
    this.getSuperpowersList();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => (this.hero = hero));
  }

  goBack(): void {
    this.location.back();
  }

  getSuperpowersList(): void {
    this.heroService.getSuperpowers()
      .subscribe(superpowersList => this.superpowersList = superpowersList);
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }

  getMarvelImage(heroName: string): void {
    this.marvelService.getHeroImage(heroName)
      .subscribe(response => {
        const results = response.data.results;
        if (results.length > 0) {
          const hero = results[0];
          const thumbnail = hero.thumbnail;
          const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;
          const existingHero = this.hero;
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
          const existingCharacter = this.hero;
          if (existingCharacter) {
            existingCharacter.image = imageUrl;
          }
        }
      });
  }

}
