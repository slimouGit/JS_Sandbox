import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class InfoTextService {

  constructor(private http: HttpClient) { }

  getInfoText(filename):Observable<any>{
    return this.http.get('assets/'+filename);
  }
}
