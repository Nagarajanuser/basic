import { Directive,Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appGoif]'
})
export class GoifDirective {

  constructor(public tempRef:TemplateRef<any>, public viewContain:ViewContainerRef) { }

  @Input() set appGoif(cond:boolean){
    console.log("IN");
    if(cond){
      console.log("TRUE");
      this.viewContain.createEmbeddedView(this.tempRef);
    }else{
      console.log("FALSE");
      this.viewContain.clear();
    }
  }

}
