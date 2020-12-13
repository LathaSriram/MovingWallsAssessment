import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import { LoginService } from '../login.service';
import { User } from '../user';
import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  [x: string]: any;
user= new User();
msg = '';
  constructor(private _service:LoginService,private _router: Router,private localStorageService: LocalStorageService,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    
  }
   signUpUser(){
    this._router.navigate(['/signup']);
   }
  loginUserPreCheckToken(){
    this.localStorageService.remove('token')
    this.loginUser();
  }
  loginUser() {
    this.spinner.show();
    this._service.loginUserFromRemote(this.user).subscribe( 
      
      data => {
      this.localStorageService.set('token', data.token);
      this.spinner.hide();
      this._router.navigate(['/dashboard/campaign']);
    },
      error => {
        console.log("exception occured in login");
      this.msg="Please check the Username or Password is valid";
      this.spinner.hide();
    }
    )
  }
 
}

