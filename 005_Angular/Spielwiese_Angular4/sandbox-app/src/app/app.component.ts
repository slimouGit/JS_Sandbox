import {Component, OnInit} from '@angular/core';

import {InfoTextService} from "./info-text.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  title = 'app';

  constructor(private infoText: InfoTextService){}

  appInfo;
  printText;

  ngOnInit(){
    this.readAppInfo("infoText");
  };

  readAppInfo(filename){
    this.infoText.getInfoText(filename).subscribe(
      results => {this.appInfo = results.textToShow;this.getInfoText(this.appInfo);},
      error => console.log(error),
      () => console.log(this.appInfo)
    );
  }

  getInfoText(appInfo){
    console.log("Infotext")
    this.printText = this.appInfo;
    console.log(appInfo);
  }

}
