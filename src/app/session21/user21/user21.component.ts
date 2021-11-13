import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/session20/user.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user21',
  templateUrl: './user21.component.html',
  styleUrls: ['./user21.component.sass']
})
export class User21Component implements OnInit {
user:any;
  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private router: Router) { }

  
  ngOnInit(): void {
    
   this.user = this.userService.users.find(user=>user.id === +this.route.snapshot.params['id']);
    if(!this.user){
     this.router.navigate(['/session21']);
    }
  }


  public onEditUser(){
    debugger
   this.router.navigate(['/user21', this.user.id,'edit']);

  }

}
