import { Component, ElementRef, ViewChild } from '@angular/core';
import { IUser } from './session15/app-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'sample';

 @ViewChild('par') par: ElementRef;

  public onContentChange(){
    this.par.nativeElement.textContent="123";
  }

user: IUser = {
  name: 'Foad',
  age: 40
}

users: IUser[] = [{
  name: 'Foad',
  age: 40
},
{
  name: 'Foad2',
  age: 22
}
,
{
  name: 'Foad3',
  age: 35
}
];

}
