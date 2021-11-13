import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/session20/user.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user21',
  templateUrl: './edit-user21.component.html',
  styleUrls: ['./edit-user21.component.sass']
})
export class EditUser21Component implements OnInit {
  user : any;
  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

   this.user = this.userService.users.find(user=>user.id === +this.route.snapshot.params['id']);
    if(!this.user){
      this.router.navigate(['/users']);
    }
    
  }

  onSaveChanges(name:string,email:string){
    this.user.name = name;
    this.user.email = email;
    this.router.navigate(['/session21']);
  }

}
