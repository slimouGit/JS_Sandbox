import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { DataComponent } from './data/data.component';
import { AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    DataComponent,
    AppRoutingModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
