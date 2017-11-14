import {Component, OnInit} from '@angular/core';

import {InfoTextService} from "./info-text.service";

import {log, catProd} from "../../config";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  magic(name: string): void {
    // Normal log to category: catProd
    log.info("Performing magic: " + name, catProd);

    // Lambda log to catProd (cheaper)
    log.infoc(() => "Performing magic once more: " + name, catProd);

    log.infoc(() => `With template script: ${name}`, catProd);
  }

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
      () => console.log("")
    );
    // Normal log to category: catProd
    log.info("Performing magic: " + filename, catProd);

    // Lambda log to catProd (cheaper)
    log.infoc(() => "Performing magic once more: " + filename, catProd);

    log.infoc(() => `With template script: ${filename}`, catProd);
  }

  getInfoText(appInfo){
    this.printText = this.appInfo;
  }

}
