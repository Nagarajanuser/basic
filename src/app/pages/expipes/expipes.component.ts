import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expipes',
  templateUrl: './expipes.component.html',
  styleUrls: ['./expipes.component.css']
})
export class ExpipesComponent implements OnInit {

  totitle:string="expipes works!";
  toupcase:string="nagaraj";
  tolowcase:string="Rajaretnam";

  toSlice:string="Single bed room for rent";
  obj = {name:"gopi", phone:34234234};

  toNumber = "31531512345.678855555";

  price = 100;
  dt = new Date();
  constructor() { }

  ngOnInit() {
  }

}
