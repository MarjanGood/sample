import { AfterContentChecked, AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-session13',
  templateUrl: './session13.component.html',
  styleUrls: ['./session13.component.sass']
})
export class Session13Component implements OnInit,AfterContentInit ,AfterContentChecked{

  @ContentChild('par',{static:true})par: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit "+this.par.nativeElement.textContent)
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit "+this.par.nativeElement.textContent)
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked "+ this.par.nativeElement.textContent)

  }
}
