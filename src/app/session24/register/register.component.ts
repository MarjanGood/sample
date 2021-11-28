import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from '../deactivate.guard';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit , CanComponentDeactivate {

  @ViewChild('input') input : ElementRef;

  constructor() { }
  canDeactivate() : boolean | Observable<boolean> | Promise<boolean>{

   if(this.input.nativeElement.value !== ''){
       return confirm('Do you wanna save the value in x service?');
   }else{
       return true;
   }
  };

  ngOnInit(): void {
  }

}
