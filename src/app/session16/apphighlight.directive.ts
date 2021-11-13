import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appApphighlight]'
})
export class AppHighlightDirective {

  constructor(private elementRef:ElementRef) { }

  @Input() highlightColor: string;
  @HostListener('mouseenter') onMouseEnter(){
    //this code is vulnarable to xss 
    this.elementRef.nativeElement.style.backgroundColor ='yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.elementRef.nativeElement.style.backgroundColor ='transparent';
  }
}
