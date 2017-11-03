import { Hero } from './hero';
import { Router } from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {MyFirstServiceService} from "./my-first-service.service";

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit{
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private router: Router, private dataService: MyFirstServiceService){
    console.log("service injected in heroes");
  }

  ngOnInit(){
    this.dataService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  onSelect(heroItem: Hero):void{
    console.log(heroItem.name + " wurde geklickt");
    this.selectedHero = heroItem;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }


}




