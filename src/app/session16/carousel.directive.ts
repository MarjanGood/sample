import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { ICarouselContext } from './interfaces/icarousel-context';

@Directive({
  selector: '[appCarousel]'
})
export class CarouselDirective implements OnInit {

@Input('appCarouselFrom') images: string[];
context:ICarouselContext;
index:number = 0;
timer:any;
  constructor(private templateRef :TemplateRef<ICarouselContext>,
              private viewContaineRef: ViewContainerRef) { }


  public ngOnInit(){
  this.context={
  $implicit: this.images[0],
  controller:{
    next:() => this.next(),
    prev:() => this.prev()
  }
  }

  this.viewContaineRef.createEmbeddedView(this.templateRef,this.context);
  }

  public next(){
  this.index++;
  if(this.index >= this.images.length){
  this.index = 0 ;
  }
  this.context.$implicit = this.images[this.index];
  }


  public prev(){
  this.index--;
   if (this.index < 0){
   this.index = this.images.length -1;
   }
   this.context.$implicit = this.images[this.index];
  }


  @Input('appCarouselAutoplay')
  set autoplay(val:string){
    val=='No' ? this.clearAuto(): this.playAuto()
  }

  public playAuto(){
    this.timer = setInterval(()=>{
      this.next();
    },1000);
  }
public clearAuto(){
  clearInterval(this.timer);
}


}
