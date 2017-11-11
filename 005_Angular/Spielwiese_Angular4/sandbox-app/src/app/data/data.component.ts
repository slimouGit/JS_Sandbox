import {Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {

  statusMessage: boolean = false;
  sendValue: string;
  buttonName: string = "click";


  @Output() sendNameEventEmitter: EventEmitter<string> = new EventEmitter();

  sendName(name){
    console.log(name + " wird geworfen");

    this.sendNameEventEmitter.emit(name);

    this.statusMessage = true;
    this.sendValue = name;
  }

}
