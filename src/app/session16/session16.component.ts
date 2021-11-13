import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session16',
  templateUrl: './session16.component.html',
  styleUrls: ['./session16.component.sass']
})
export class Session16Component implements OnInit {

  color='red';
  constructor() { }

  ngOnInit(): void {
  }

  images: string[] =[ 'assets/session16/1.jpg','assets/session16/2.jpg','assets/session16/3.jpg'];


}
