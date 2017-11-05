import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

export class Car{
  id: number;
  brand: string;
  name: string;
}
/**
car : Car = {
  id: 1,
  brand: "BMW",
  name: "5er"
};
**/
