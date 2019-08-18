import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-parentchild22',
  templateUrl: './parentchild22.component.html',
  styleUrls: ['./parentchild22.component.css']
})
export class Parentchild22Component implements OnInit, OnChanges {

  constructor() {
    console.log("constructor Invocked");
   }
  
  ngOnInit() {
    console.log("ngOnInit Invocked");
  }

  @Input() parentvalue:any;

  ngOnChanges(){
    console.log("NgOnChanges Invocked");
  }

}
