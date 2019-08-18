import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex1-parent1',
  templateUrl: './ex1-parent1.component.html',
  styleUrls: ['./ex1-parent1.component.css']
})
export class Ex1Parent1Component implements OnInit {

  count:any=0;
 
  constructor() { }

  ngOnInit() {
  }

  increase(){
    this.count=this.count+1;
  }

}
