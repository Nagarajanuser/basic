import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/service/share.service';
@Component({
  selector: 'app-sibling3',
  templateUrl: './sibling3.component.html',
  styleUrls: ['./sibling3.component.css']
})
export class Sibling3Component implements OnInit {
  messageSib:string;
  constructor(public shareSer:ShareService) { }

  ngOnInit() {
    this.shareSer.currentMessage.subscribe(message => this.messageSib=message)
  }

}
