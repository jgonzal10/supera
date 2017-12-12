import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { LoginService } from './service/login.service';
import { Http } from '@angular/http';
import { User } from './service/user';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    checked: boolean;
    login: string;
    password: string;
    error: string;
    user: User[];
    showSpinner = false;
    constructor(public router: Router, private loginService: LoginService , private http: Http) {
    }


    ngOnInit() {
    }

    onLoggedin() {
   //  
   this.showSpinner = true;
console.log("login")
this.router.navigate(['/dispense']);
     //Service Connection
      /*  this.showSpinner = true;
        this.loginService.getUser(this.login, this.password).subscribe( (response) => {
                this.user = response;
                console.log(response)
                if ( typeof response !== "undefined") {
                    this.showSpinner = false;
                    this.router.navigate(['/diagnosepatient']);
                    localStorage.setItem('isLoggedin', 'true');

                } else {
                    this.showSpinner = false;
                    this.error = 'no valid!';
                    console.log(this.error);
                }
         });*/
    }

}
