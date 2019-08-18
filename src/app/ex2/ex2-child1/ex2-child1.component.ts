import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ex2-child1',
  templateUrl: './ex2-child1.component.html',
  styleUrls: ['./ex2-child1.component.css']
})
export class Ex2Child1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() customEvent = new EventEmitter();

  increase(){
    //console.log("Up");
    this.customEvent.emit();
  }

}
