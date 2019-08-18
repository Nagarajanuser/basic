import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private messageSource = new BehaviorSubject<string>("default message");
  //private messageSource = new BehaviorSubject;
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message:string){
    this.messageSource.next(message);
  }

}
