import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../user';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  alert:boolean=false;
  user = new User();
  userReg= new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private _service:LoginService, private _router :Router,private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }
 signUpUser(){
  this.spinner.show();
  this._service.addUserFromRemote(this.user).subscribe(
    data => {
      this.spinner.hide();
      console.log("Success");
      this.alert=true; 
    },
    error => {
      console.log("Exception occured");
    }
  ) 
}
closeAlert(){
  this.alert=false;
}
}
