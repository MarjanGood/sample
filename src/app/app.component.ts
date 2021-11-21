import { Component, ElementRef, ViewChild } from '@angular/core';
import { IUser } from './session15/app-interface';
import { LoggingService } from './session17/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(private loggingService: LoggingService) { }


//**************session16
//   title = 'sample';
//  @ViewChild('par') par: ElementRef;
//   public onContentChange(){
//     this.par.nativeElement.textContent="123";
//   }

// user: IUser = {
//   name: 'Foad',
//   age: 40
// }

// users: IUser[] = [{
//   name: 'Foad',
//   age: 40
// },
// {
//   name: 'Foad2',
//   age: 22
// }
// ,
// {
//   name: 'Foad3',
//   age: 35
// }
// ];
//**********************




// public log() {
//   console.log(this.loggingService.title);
//   this.loggingService.log("Log from app Component");
// }

// public onChange(event: Event) {
//   this.loggingService.title = (event.target as HTMLInputElement).value;
// }


}
