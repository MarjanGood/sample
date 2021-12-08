import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { mockdata } from 'src/helpers/mock.Data';

@Component({
  selector: 'app-session29',
  templateUrl: './session29.component.html',
  styleUrls: ['./session29.component.sass']
})
export class Session29Component implements OnInit {

  @ViewChild('input',{static:true}) input: ElementRef;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  of(mockdata).subscribe(console.log);

  this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(console.log);
  this.http.get('https://jsonplaceholder.typicode.com/comments').subscribe(console.log);

  of(['name1','name2','name3']).subscribe(console.log);

  of('name1','name2','name3').subscribe(console.log); //or below
  from(['name1','name2','name3']).subscribe(console.log);

 // fromEvent(document,'click').subscribe(console.log);
  fromEvent(this.input.nativeElement,'input').subscribe(console.log);

  }

}
