import { Component, OnInit, OnChanges, Input, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {

  constructor() {

    console.log("constructor invoked");
   }

   @Input() myVal;

   

  ngOnInit() {

    console.log("ngOnInit invoked");
  }

  ngOnChanges()
   {
    console.log("ngOnChanges invoked");
   }

   ngDoCheck()
   {
    console.log("ngDoCheck invoked");
   }

   ngAfterContentInit()
   {
    console.log("ngAfterContentInit invoked");
   }

   ngAfterContentChecked()
   {
    console.log("ngAfterContentChecked invoked");
   }

   ngAfterViewInit()
   {
    console.log("ngAfterViewInit invoked");
   }

   ngAfterViewChecked()
   {
    console.log("ngAfterViewChecked invoked");
   }

   ngOnDestroy()
   {
    console.log("ngOnDestroy invoked");
   }

}

