import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/service/share.service';
@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit {
  messageSib:string;
  constructor(public shareSer:ShareService) { }

  ngOnInit() {
    this.shareSer.currentMessage.subscribe(message => this.messageSib=message)
  }

}
