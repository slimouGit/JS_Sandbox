import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Cars} from "../models/cars";

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  @Input() car: Cars[];

  //Boolean aus car-pool entgegennehmen
  @Input() showCars: boolean;

  @Output() carUpdated: EventEmitter<string> = new EventEmitter();

  constructor() {
    console.log("constructor in CarDetailComponent");

  }

  ngOnInit() {
    this.carUpdated.emit("Car updated");
  }

}
