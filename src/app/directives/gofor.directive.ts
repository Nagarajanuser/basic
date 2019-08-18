import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appGofor]'
})
export class GoforDirective {

  constructor(public tempRef: TemplateRef<any>, public vcRef:ViewContainerRef) { }

  @Input() set appGofor(getcount:number){
    console.log(getcount);
    this.vcRef.clear();
    for(var i=0; i<getcount; i++){
      console.log(i);
      this.vcRef.createEmbeddedView(this.tempRef);
    }

  }

}
