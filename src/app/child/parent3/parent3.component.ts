import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Child3Component } from "../child3/child3.component";

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.css']
})
export class Parent3Component implements AfterViewInit {
  @ViewChild(Child3Component) Child3;
  
  constructor() { }
  
  message:any;

  ngAfterViewInit() {
    console.log(this.Child3.message)
    this.message = this.Child3.message;
  }

}
