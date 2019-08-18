import { Component, OnInit , ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-encapsulation1',
  templateUrl: './encapsulation1.component.html',
  styleUrls: ['./encapsulation1.component.css'],
  //encapsulation:ViewEncapsulation.Emulated  // default
  //encapsulation:ViewEncapsulation.Native 
  encapsulation:ViewEncapsulation.None
})
export class Encapsulation1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
