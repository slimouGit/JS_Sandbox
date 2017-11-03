import {Component, OnInit} from '@angular/core';

import { Hero } from './hero';
import {MyFirstServiceService} from "./my-first-service.service";
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit{
  hero: Hero;

  constructor(
    private dataService: MyFirstServiceService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void{
    this.route.paramMap
      .switchMap((params: ParamMap) => this.dataService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }



}
