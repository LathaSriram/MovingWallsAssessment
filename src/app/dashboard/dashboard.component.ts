import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private _service:LoginService,private _router: Router,private localStorageService: LocalStorageService) { }
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
  logoutUser() {
    console.log("logout");
    this.localStorageService.remove('token');
    this._router.navigate(['']);
  }
}
