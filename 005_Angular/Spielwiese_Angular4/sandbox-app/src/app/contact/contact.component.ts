import { Component } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  successMessage: boolean = false;
  catchValue: string;

   getName(name){
    console.log(name + " ist in contact.component.ts");

    this.catchValue = name;
    this.successMessage = true;

  }
}
