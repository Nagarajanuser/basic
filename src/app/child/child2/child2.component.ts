import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor() { }

  @Output() eventEmi = new EventEmitter();

  ngOnInit() {
  }

  transMessage = "Start message";

  sentMessage(){
    console.log("child butt");
    this.eventEmi.emit(this.transMessage);
    console.log("child butt aff");
  }
  
}
