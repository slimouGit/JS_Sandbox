import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loggedIn:boolean = false;

  loginUser(e){
    e.preventDefault();
    let username = e.target.elements[0].value;
    let password = e.target.elements[1].value;

    if(username == 'admin' && password == 'password'){
      this.loggedIn = true;
      this.router.navigate(['./dashboard']);
    }
  }

}
