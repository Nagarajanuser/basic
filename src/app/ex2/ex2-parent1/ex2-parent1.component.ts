import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex2-parent1',
  templateUrl: './ex2-parent1.component.html',
  styleUrls: ['./ex2-parent1.component.css']
})
export class Ex2Parent1Component implements OnInit {

  divHeight:any=50;
  divWidth:any= 200;
  constructor() { }

  ngOnInit() {
  }
  receiveevent(){
    console.log("Received");
    this.divHeight=this.divHeight+20;
    this.divWidth=this.divWidth+20;
    document.getElementById("updiv").style.height=this.divHeight+"px";
    document.getElementById("updiv").style.width=this.divWidth+"px";
  }

}
