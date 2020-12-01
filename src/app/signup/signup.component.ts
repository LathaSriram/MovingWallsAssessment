import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../user';

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
  constructor(private _service:LoginService, private _router :Router) { }

  ngOnInit() {
  }
 signUpUser(){

  console.log("how are you---"+this.user.email,this.user.username,this.user.password);
  this._service.addUserFromRemote(this.user).subscribe(
    data => {
      console.log("Success");
      this.alert=true; 
    },
    error => {
      console.log("response add campaign error @@@"+JSON.stringify({ error }));
      console.log("Exception occured");
    }
  ) 
}
closeAlert(){
  this.alert=false;
}
}
