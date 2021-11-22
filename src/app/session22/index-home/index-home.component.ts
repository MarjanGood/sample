
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-index-home',
  templateUrl: './index-home.component.html',
  styleUrls: ['./index-home.component.sass']
})

export class IndexHomeComponent implements OnInit {

  isLoggedIn: boolean = false;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    
    this.isLoggedIn= this.authService.checkAuth();
  }

  public loginUser(){
   this.authService.login();
   this.isLoggedIn = this.authService.checkAuth();
 }

  public logoutUser(){
   this.authService.logout();
   this.isLoggedIn = this.authService.checkAuth();
  }

}
