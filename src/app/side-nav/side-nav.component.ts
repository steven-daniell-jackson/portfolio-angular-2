import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
showStyle: false;

  constructor() { }

  ngOnInit() {}


getStyle() {
    if(this.showStyle) {
      return "250px";
    } else {
      return "0px";
    }

}

}
