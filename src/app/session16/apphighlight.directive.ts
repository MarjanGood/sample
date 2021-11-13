import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appApphighlight]'
})
export class AppHighlightDirective {

  constructor(private elementRef:ElementRef, private renderer: Renderer2) { }

  @Input('appApphighlight') highlightColor: string = 'green';
  @HostListener('mouseenter') onMouseEnter(){
    //this code is vulnarable to xss 
   // this.elementRef.nativeElement.style.backgroundColor ='yellow';

   this.changeBackgroundColor(this.highlightColor);

  }

  @HostListener('mouseleave') onMouseLeave(){
    //this code is vulnarable to xss 
   // this.elementRef.nativeElement.style.backgroundColor ='transparent';

   this.changeBackgroundColor('transparent');
  }

// it is much more safer 
  private changeBackgroundColor(color: string){

  // this.elementRef.nativeElement.style.backgroundColor = color;
  // it is much more safer 
   this.renderer.setStyle(this.elementRef.nativeElement, 'background-color' , color);

  }


}
