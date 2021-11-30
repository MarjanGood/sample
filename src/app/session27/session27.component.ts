import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-session27',
  templateUrl: './session27.component.html',
  styleUrls: ['./session27.component.sass']
})
export class Session27Component implements OnInit ,OnDestroy{

  public intervalSubscription: Subscription;

  constructor() { }

  ngOnInit(): void {

    const interval$  = interval(1000);
    
    // const interval$ = new Observable((observer:Observer<number>)=>{   
    //   let count=0;
    //   setInterval(()=>{
    //     observer.next(count++);
    //     if(count===5){
    //       //observer.error(new Error('we reached 5!'));
    //       //observer.complete();
    //     }
    //   }, 1000);
      
    //   // observer.next(1);
    //   // observer.next(2);
    //   // observer.next(3);
    //   // observer.error(new Error('Error in app!'));
    // });

    this.intervalSubscription = interval$.subscribe(
      (val)=>{ console.log(val);},
      (err)=>{ console.log(err);},
      ()=>{ console.log('Completed');}
    );

    document.addEventListener('click',(event)=>{
      console.log(event);
    });

  }

public ngOnDestroy(): void{
    this.intervalSubscription.unsubscribe();
}

 

}
