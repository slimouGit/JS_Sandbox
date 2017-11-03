import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import {MyFirstServiceService} from "./my-first-service.service";

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  heroes: Hero[] = [];

  constructor(private dataService:MyFirstServiceService) {
    console.log("Service injected in dashboard");
  }

  ngOnInit(){
    this.dataService.getHeroesSlowly().then(heroes => this.heroes = heroes.slice(0,4));
  }
}
