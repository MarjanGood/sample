import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-inc',
  templateUrl: './inc.component.html',
  styleUrls: ['./inc.component.sass']
})
export class IncComponent implements OnInit, AfterViewInit{

  @ViewChild('par') par?: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

 public ngAfterViewInit(): void {
   // @ts-ignore
   this.par.nativeElement.innerHTML = '123456';
  }
}
