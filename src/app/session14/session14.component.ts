import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';


@Component({
  selector: 'app-session14',
  templateUrl: './session14.component.html',
  styleUrls: ['./session14.component.sass']
})
export class Session14Component implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

   @ViewChild('par2',{static:true}) par2: ElementRef;
   @ContentChild('par',{static:true}) par: ElementRef;
   //@Input() var1; 

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
   console.log('ngOnChanges was called');
  }

  ngOnInit(): void {
   console.log('ngOnInit was called');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck was called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit was called');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked was called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit was called');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked was called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy was called');
  }

  onchangeViewChild(){
    this.par2.nativeElement.textContent = 'View child changed!!!';
  }







}
