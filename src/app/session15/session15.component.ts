import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IUser } from './app-interface';

@Component({
  selector: 'app-session15',
  templateUrl: './session15.component.html',
  styleUrls: ['./session15.component.sass']
})
export class Session15Component implements OnInit,OnChanges {

  private _user:IUser;
  counter: number = 0;

  @Input()
  set user(user:IUser){
    this._user=user;
    this.counter++;
  };

  get user(): IUser{
    return this._user;
  }
    
  constructor() { }

  ngOnChanges(): void {
   this._user =this.user;
   this.counter++;
  }

  ngOnInit(): void {
    console.log(this._user , this.counter);
  }


}
