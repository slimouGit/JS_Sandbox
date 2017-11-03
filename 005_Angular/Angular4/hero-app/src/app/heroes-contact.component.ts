import {Component, OnInit} from '@angular/core';
import {Contact} from "./contact";
import { Router } from '@angular/router';
import {MySecondService} from "./my-second-service";

@Component({
  selector: 'app-contact',
  templateUrl: './heroes-contact.component.html'
})

export class HeroesContact implements OnInit{
    title = 'Contact-Data';
    contacts = null;

  constructor(private router: Router, private dataService2: MySecondService){
    console.log("service injected in contacts");
  }

    ngOnInit(){
      this.dataService2.printContacts().then(contacts => this.contacts = contacts);
    }
}
