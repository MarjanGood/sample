import { Component, OnInit } from '@angular/core';
import { IUser } from '../session20/user.interface';
import { UserService } from './user.service';

@Component({
  selector: 'app-session21',
  templateUrl: './session21.component.html',
  styleUrls: ['./session21.component.sass']
})
export class Session21Component implements OnInit {

  users: IUser[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.users;
  }

}
