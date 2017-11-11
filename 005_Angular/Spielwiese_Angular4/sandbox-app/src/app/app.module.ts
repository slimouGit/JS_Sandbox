import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { ContactComponent } from './contact/contact.component';
import { CarPoolComponent } from './car-pool/car-pool.component';

import { DataService} from "./data-service.service";


@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    ContactComponent,
    CarPoolComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
