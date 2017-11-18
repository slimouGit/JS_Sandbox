import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-car-garage',
  templateUrl: './car-garage.component.html',
  styleUrls: ['./car-garage.component.css']
})
export class CarGarageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //Boolean aus car-pool entgegennehmen
  @Input() showCarsTransferedBoolean: boolean;

}
