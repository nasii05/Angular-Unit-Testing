import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  mesages:string[] = [];

  constructor(){
    debugger;
    // logic
  }

  log(message:string){
    debugger;
    this.mesages.push(message);
  }

  
    
}
