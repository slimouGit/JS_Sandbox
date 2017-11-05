import {Component, Input} from "@angular/core";

import {Car} from "./car";

@Component({
  selector: 'car-detail',
  templateUrl: 'app.car-detail.component.html'
})

export class CarDetail{
  @Input() cars: Car[];
}
