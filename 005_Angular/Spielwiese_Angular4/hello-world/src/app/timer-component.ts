import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'my-timer',
  templateUrl: './timer.component.html'
})
export class TimerComponent implements OnInit {
  ngOnInit(){};

  duration:string = "test";

}



