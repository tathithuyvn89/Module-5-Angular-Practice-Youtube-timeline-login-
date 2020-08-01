import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-login-step1',
  templateUrl: './login-step1.component.html',
  styleUrls: ['./login-step1.component.css']
})
export class LoginStep1Component implements OnInit {
username: FormControl;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }
  nextStep() {
    this.loginService.loginData.username = this.username.value;
    this.router.navigateByUrl('login-step-2');
  }

}
