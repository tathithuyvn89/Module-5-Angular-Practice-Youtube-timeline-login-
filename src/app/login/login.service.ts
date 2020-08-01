import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
loginData =  {
  username: '',
  password: ''
};
  constructor() { }
}
