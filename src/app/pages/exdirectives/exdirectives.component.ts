import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exdirectives',
  templateUrl: './exdirectives.component.html',
  styleUrls: ['./exdirectives.component.css']
})
export class ExdirectivesComponent implements OnInit {

  show=false;

  count:number=5;
  constructor() { }

  ngOnInit() {
  }

}
