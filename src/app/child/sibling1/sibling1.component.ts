import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/service/share.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {

  messageSib:string;
  constructor(public shareSer:ShareService) { }

  ngOnInit() {
    this.shareSer.currentMessage.subscribe(message => this.messageSib=message);
  }
  newMessage(){
    this.shareSer.changeMessage("hello from sibling");
  }
}
