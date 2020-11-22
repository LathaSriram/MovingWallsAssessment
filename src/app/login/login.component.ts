import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import { LoginService } from '../login.service';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
user= new User();
msg = '';
  constructor(private _service:LoginService,private _router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    
    this._service.loginUserFromRemote(this.user).subscribe( 
      
      data => {
      console.log("response received");
      this._router.navigate(['/dashboard/campaign']);
    },
      error => {
        console.log("exception occured");
       this.msg="Bad credentials, please enter valid emailID and passwword"
    }
    )
  }
}

