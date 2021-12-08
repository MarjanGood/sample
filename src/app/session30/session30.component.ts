import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, take, takeWhile, tap } from 'rxjs/internal/operators';

@Component({
  selector: 'app-session30',
  templateUrl: './session30.component.html',
  styleUrls: ['./session30.component.sass']
})
export class Session30Component implements OnInit {

  constructor() { }

  ngOnInit(): void {

    fromEvent(document,'click').pipe(
      map(event => event as MouseEvent),
      map(item => {
        return {
          x: item.offsetX,   
          y:item.offsetY
        }
      }),
    //  take(2),
      takeWhile(item=>item.x<1000),
      tap(i=> console.log(i)),
    ).subscribe();
    
   // ).subscribe(console.log);
   //  console.log == tap
  }

}
