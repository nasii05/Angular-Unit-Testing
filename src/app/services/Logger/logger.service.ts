import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  mesages:string[] = [];

  log(message:string){
    debugger;
    this.mesages.push(message);
  }

  
    
}
