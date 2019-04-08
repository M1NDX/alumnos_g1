import { Injectable } from '@angular/core';
import { tokenKey } from '@angular/core/src/view';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = '';

  constructor() { }

  isAuthenticated(){
    return this.token.length > 0;
  }

  login(){
    this.token ='activo';
  }

  logout(){
    this.token = '';
  }

}
