import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

   public title: string = "default";

    public log(message: string) {
        console.log(message);
    }

}
