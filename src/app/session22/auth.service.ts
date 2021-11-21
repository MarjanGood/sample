import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedIn: boolean = false;

  public isAuthenticated() {
    return new Promise((resolve, reject) => {

      debugger
      console.log(this.loggedIn);

      setTimeout(() => {
        resolve(this.loggedIn);
      }, 1000);
    }); 
  }

  public checkAuth() {
    return this.loggedIn;
  }

  public login() {
    this.loggedIn = true;
  }

  public logout() {
    this.loggedIn = false;
  }
}