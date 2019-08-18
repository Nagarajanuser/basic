import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
  //pure:false
})
export class SummaryPipe implements PipeTransform {

  transform(value: any, args:any): any {

    console.log(args);

    if(value.length > args){
      return value.substring(0,args)+"...";
    }
    
    return value;
  }

}
