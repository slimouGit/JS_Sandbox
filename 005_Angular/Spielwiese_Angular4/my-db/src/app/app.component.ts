
import {Component, OnInit} from '@angular/core';
import {MyDataServiceService} from "./my-data-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private carService: MyDataServiceService){}

  ngOnInit(){
    this.carService.fetchData();
  }
}
