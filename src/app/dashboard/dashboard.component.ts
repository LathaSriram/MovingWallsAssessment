import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  collapse = false;
  ngOnInit() {
  }

  CollapseIt(){
    if (this.collapse === false) {
      this.collapse = true;
    } else {
      this.collapse = false;
    }
  }

}
