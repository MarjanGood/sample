import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-inc',
  templateUrl: './inc.component.html',
  styleUrls: ['./inc.component.sass']
})
export class IncComponent implements OnInit, AfterViewInit{

  @ViewChild('par') par?: ElementRef;
 

  constructor(){
   // فراخوانی در هنگام ساخت کامپوننت
  }
  ngOnChanges(){
    //@Input فراخوانی در هنگام تغییر پراپرتی از طریق 
  }
  ngOnInit(){
  //  فراخوانی در هنگام اولین اجرای کامپوننت
  }
  ngDoCheck(){
  //  فراخوانی در هنگام تشخیص هر تغییر در کامپوننت
  }
  ngAfterContentInit(){
   // فراخوانی در هنگام اعمال محتویات contentChild
  }
  ngAfterContentChecked(){
  //فراخوانی در زمان چک کردن و یا تغییر contentChild
  }
  ngAfterViewInit(): void {
    //  فراخوانی در هنگام اولیه ساختن ViewChild
    // @ts-ignore
    this.par.nativeElement.innerHTML = '123456';
   }
  ngAfterViewchecked(){
   // فراخوانی در زمان چک کردن و یا تغییر viewChild
  }
  ngOnDestory(){
  //  فرآخوانی در زمان نابودی کامپوننت
  }




}
