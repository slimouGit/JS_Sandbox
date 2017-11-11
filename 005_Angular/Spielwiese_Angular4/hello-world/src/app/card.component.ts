import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'my-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {
  ngOnInit(){};

  @Input() title: string;

}

