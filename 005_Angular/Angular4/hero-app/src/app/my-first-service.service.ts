import { Injectable } from '@angular/core';
import {Hero} from "./hero";
import {HEROES} from "./mockHeroData";

@Injectable()
export class MyFirstServiceService {

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  getHerosImmediately(): Promise<Hero[]>{
    return new Promise(resolve => {
      resolve(this.getHeroes());
    });
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }

}
