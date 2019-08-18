import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-ex1-child1',
  templateUrl: './ex1-child1.component.html',
  styleUrls: ['./ex1-child1.component.css']
})
export class Ex1Child1Component implements OnInit {

  divWidth:number=200;
  divHeight:number=50;
  recValue:number=0;
  constructor() { }

  ngOnInit() {
    //document.getElementById("updiv").style.height="50px";
  }

  @Input() set receiveValue(val){
    this.divHeight=this.divHeight+20;
    this.divWidth=this.divWidth+20;
    document.getElementById("updiv").style.height=this.divHeight+"px";
    document.getElementById("updiv").style.width=this.divWidth+"px";
  }
 

}
