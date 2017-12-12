import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PreparationService {
  private url: string = "http://localhost:9003/todaysPreparations";
  constructor(private http: Http) { }

   getTodaysPreparations(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

}
