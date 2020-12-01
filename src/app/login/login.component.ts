import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import { LoginService } from '../login.service';
import { User } from '../user';
import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
user= new User();
msg = '';
  constructor(private _service:LoginService,private _router: Router,private localStorageService: LocalStorageService) { }

  ngOnInit() {
    
  }
   signUpUser(){
    this._router.navigate(['/signup']);
   }
  loginUser() {
    
    
    this._service.loginUserFromRemote(this.user).subscribe( 
      
      data => {

      console.log("response received loginuser "+data.token);

      this.localStorageService.set('token', data.token);

      this._router.navigate(['/dashboard/campaign']);
    },
      error => {
        console.log("response received loginuser "+JSON.stringify({ error }));
        console.log("exception occured");
       this.msg="Bad credentials, please enter valid username and password"
    }
    )
  }
 
}

