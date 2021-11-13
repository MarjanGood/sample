import { Injectable } from "@angular/core";
import { IUser } from "../session20/user.interface";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  public users : IUser[] =[
  {id:1, name:'Foad', email:'foad@gamil.com'},
  {id:2, name:'Foad2', email:'foad@gamil.com'},
  {id:3, name:'Foad3', email:'foad@gamil.com'}
  ];
}
