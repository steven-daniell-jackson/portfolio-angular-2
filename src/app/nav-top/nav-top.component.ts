import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.scss']
})
export class NavTopComponent implements OnInit {

counterValue = 1;

  constructor() {}


get counter(){
return this.counterValue;
}


  ngOnInit() {}

}
