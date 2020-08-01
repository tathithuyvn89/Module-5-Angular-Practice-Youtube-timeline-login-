import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-login-step2',
  templateUrl: './login-step2.component.html',
  styleUrls: ['./login-step2.component.css']
})
export class LoginStep2Component implements OnInit {

  username: string;
  password = new FormControl();
  constructor(private loginSrv: LoginService) {}

  ngOnInit() {
    this.username = this.loginSrv.loginData.username;
  }

  login() {
    // do login
    console.log({
      username: this.username,
      password: this.password.value
    });
  }
}
