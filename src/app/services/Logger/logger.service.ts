import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  mesages:string[] = [];

  log(message:string){
    this.mesages.push(message);
  }

  clear(){
    this.mesages = [];
  }

  
    
}
