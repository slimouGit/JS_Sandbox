import { Injectable } from '@angular/core';
import {Contact} from "./contact";
import {CONTACTS} from "./mockContactData";

@Injectable()
export class MySecondService{

  getContacts(): Promise<Contact[]>{
    return Promise.resolve(CONTACTS);
  }
  printContacts(): Promise<Contact[]>{
    return new Promise(resolve => {
      resolve(this.getContacts());
    })
  }


}
