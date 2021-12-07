import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import Keyboard from "simple-keyboard";

@Component({
  selector: 'ngx-virtual-keyboard',
  templateUrl: './virtual-keyboard.component.html',
  styleUrls: ['./virtual-keyboard.component.scss']
})

export class VirtualKeyboardComponent implements OnInit {

  public barLabel: string = "میزان امنیت :";  
  password: any;
  virtualKeyboard :boolean;
  value = "";
  keyboard: Keyboard;
  @ViewChild('par') par?: ElementRef;
  @Input() placeholder: string;
  @Input() inputName: string;
  @Input() strengthBar: boolean;
  @Output() valueReturn = new EventEmitter<object>(); 
  valueFromat: {
    inputName: string,
    value:string
  };

  constructor(private renderer2:Renderer2,private el: ElementRef) { }

  ngOnInit(): void {
  }


  showKeyboard(){
    // if(!this.virtualKeyboard){
    //  this.renderer2.setStyle(this.par.nativeElement, 'display', 'block');
    //  this.virtualKeyboard = true;
    // }else{
    //  this.renderer2.setStyle(this.par.nativeElement, 'display', 'none'); 
    //  this.virtualKeyboard = false;
    // }
   }

  ngAfterViewInit() {  
    this.keyboard = new Keyboard({
      onChange: input => this.onChange(input),
      onKeyPress: (button: string) => this.onKeyPress(button),
      theme:"simple-keyboard hg-theme-default myTheme1 hg-layout-default",
      buttonTheme: [
        {
          class: "hg-red",
          buttons: "Q W E R T Y q w e r t y"
        }]
    });

   // this.renderer2.removeClass(this.par.nativeElement, 'simple-keyboard');
  }

  onChange = (input: string) => {
    this.value = input;
    console.log("Input changed", input);
    this.emitData(input);
  };

emitData(value: string){
  this.valueFromat= {
    inputName: this.inputName,
    value:value
  };
  this.valueReturn.emit(this.valueFromat);
}

  onKeyPress = (button: string) => {
    console.log("Button pressed", button);
    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") this.handleShift();
  };

  onInputChange = (event: any) => {
    this.keyboard.setInput(event.target.value);
    this.emitData(event.target.value);
  };

  handleShift = () => {
    let currentLayout = this.keyboard.options.layoutName;
    let shiftToggle = currentLayout === "default" ? "shift" : "default";
    this.keyboard.setOptions({
      layoutName: shiftToggle
    });
  };

}
