import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { AppRoutingModule }     from './app-routing.module';

import {MyFirstServiceService} from "./my-first-service.service";

import {HeroesContact} from "./heroes-contact.component";
import {MySecondService} from "./my-second-service";


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroesContact
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],

  providers: [MyFirstServiceService, MySecondService],
  bootstrap: [AppComponent]
})
export class AppModule { }
