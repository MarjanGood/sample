import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorful]'
})
export class ColorfulDirective {

 availableColores = ['#8E008E', '#120012','#5E005E','#E500E5','#FD06FD', 'yellow'];

 @HostBinding('style.color') color: string;
 @HostBinding('style.border-color') borderColor: string;
 @HostListener('keydown') newColor(){

  const randomColorIndex = Math.floor(Math.random() * this.availableColores.length);
  this.color = this.borderColor = this.availableColores[randomColorIndex];

}
}
