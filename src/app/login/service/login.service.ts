import { User } from './user';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  url = 'http://localhost:9003/userLogin/';

    constructor(private http: Http) { }

    getUser(login: string, password: string): Observable<User[]> {
    console.log('getUser')
      return this.http.get(this.url + login + '/' + password)
      .map((res: Response) => res.json());
    }

}