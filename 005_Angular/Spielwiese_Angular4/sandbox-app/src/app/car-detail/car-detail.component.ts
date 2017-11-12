import { Component, OnInit, Input} from '@angular/core';
import {Cars} from "../models/cars";

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  @Input() car: Cars[];

  constructor() { }

  ngOnInit() {
  }

}
