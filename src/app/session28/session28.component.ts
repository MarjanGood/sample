import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/internal/operators';
import { TodoModel } from './todo/todo.model';


@Component({
  selector: 'app-session28',
  templateUrl: './session28.component.html',
  styleUrls: ['./session28.component.sass']
})
export class Session28Component implements OnInit {

  public http$: Observable<TodoModel[]>;

  public doneTasks: TodoModel[];
  public undoneTasks: TodoModel[];

  public doneTasks$: Observable<TodoModel[]>;
  public undoneTasks$: Observable<TodoModel[]>;

  constructor() { }

  ngOnInit(): void {

    this.http$ = new Observable((observer)=>{ 
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response)=>{ return response.json();
       })
      .then((body)=> {
        observer.next(body);
        observer.complete();
       })
       .catch((err)=>{
         console.log(err);
       });
    });


//it is wrong 
// this.http$.subscribe((val)=>{
//  this.doneTasks = val.filter(todo=> todo.completed === true);
//  console.log(this.doneTasks);

//  this.undoneTasks = val.filter(todo=> todo.completed === false);
//  console.log(this.undoneTasks);
// });

  // this.http$ = this.http$;
   this.http$ = this.http$.pipe(
     shareReplay()
   );
  

   this.doneTasks$  = this.http$.pipe(
     map((todo)=>todo.filter((todo)=> todo.completed === true)),
     );

   this.undoneTasks$  = this.http$.pipe(
    map((todo)=>todo.filter((todo)=> todo.completed === false)),
    );




  }
}
