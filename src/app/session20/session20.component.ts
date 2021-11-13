import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from './user.interface';

@Component({
  selector: 'app-session20',
  templateUrl: './session20.component.html',
  styleUrls: ['./session20.component.sass']
})
export class Session20Component implements OnInit {
  selectedId: number;
  selectedUser: IUser;
  isUserFound: boolean = true;

  users: any[]=[
    {
    id: 1,
    name:'Foad'
  },
  {
    id: 2,
    name:'Foad2'
  },
  {
    id: 3,
    name:'Foad3'
  }
];
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
   debugger
    this.selectedId = +this.route.snapshot.params['id'];
    this.selectedUser = this.users.find(user=> user.id === this.selectedId);
    if(!this.selectedUser){
      this.isUserFound = false;
    }
    console.log(this.selectedUser);

    this.route.params.subscribe((params)=>{
      this.selectedUser = this.users.find(user=> user.id === +params['id']);
  });

}
}
