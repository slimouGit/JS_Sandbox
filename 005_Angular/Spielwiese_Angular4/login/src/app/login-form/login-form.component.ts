import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../user.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(private router: Router, private user: UserService) { }

  //Login Status in loggedState speichern
  loggedState = this.user.getUserLoggedIn();

  loginUser(e){
    e.preventDefault();
    let username = e.target.elements[0].value;
    let password = e.target.elements[1].value;

    if(username == 'admin' && password == 'password'){
      this.user.setUserLoggedIn();
      this.router.navigate(['./dashboard']);
    }
  }

  logout(){
    this.loggedState = this.user.logoutUser();
  }
}
