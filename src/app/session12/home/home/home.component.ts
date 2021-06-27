import {Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren} from '@angular/core';
import {IncComponent} from '../../inc/inc/inc.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  htmlTest = '<img src="xxx" onerror="alert()">'; // hacker write test;

  @ViewChild('par') par?: ElementRef;
  @ViewChild(IncComponent, {static: true , read: IncComponent}) incComp?: IncComponent;
  @ViewChildren(IncComponent, {read: IncComponent}) incComps?: QueryList<IncComponent>;


 /*  static:true => for using in ngOnInit
   static:false >> is better if you are not force to use in ngOnInit*/

  constructor(private renderer: Renderer2) {}

  public ngOnInit(): void {
    // @ts-ignore
    this.par.nativeElement.style.color = 'purple'; // it's wrong to use nativeElement,it is not safe way use renderer2' >> use this as a last resort
    // @ts-ignore
    this.par.nativeElement.innerHTML = this.htmlTest; // hacker could write this html  [innerHtml]>> Sanitizing html stripped some content
     // @ts-ignore
    this.renderer.setStyle(this.par.nativeElement, 'color', 'purple'); // better way
    this.incComp?.ngAfterViewInit(); // use function in IncComponent

  }

/*  ngAfterViewInit(){

     this.par.nativeElement.innerHTML = "test";

    /!*   this.incComps.forEach((comp)=>{
       comp.increment();
       });*!/
  }*/

}
