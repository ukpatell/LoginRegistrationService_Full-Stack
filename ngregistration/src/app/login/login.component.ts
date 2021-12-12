import { Component, OnInit } from '@angular/core';
import {RegistrationService} from "../registration.service";
import {User} from "../user";
import {NgForm} from "@angular/forms";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  msg = '';
  constructor(private _service:RegistrationService,private  _router : Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("Response Received");
        this._router.navigate(['/product'])
      },
        error => {
        console.log("Exception Occurred");
        this.msg = "Bad Credentials, Try Again!";
        }
    )
  }

  goToRegistration() {
    console.log("Registration Page");
    this._router.navigate(['/registration'])
  }
}
