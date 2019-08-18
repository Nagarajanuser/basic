import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-expipescustom',
  templateUrl: './expipescustom.component.html',
  styleUrls: ['./expipescustom.component.css']
})
export class ExpipescustomComponent implements OnInit {
  content:any="Most templating systems bind data in only one direction";
  content2:any="222 Most templating systems bind data in only one direction";
  username:any;
  content_ori:any=this.content;


  constructor() { }

  ngOnInit() {
  }

  login(NgForm){
    console.log(NgForm);
  };

  changeContent(){
    this.content_ori=this.content2
    console.log("Test");
  };

}
