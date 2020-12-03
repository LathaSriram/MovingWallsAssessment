import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { CampaignsComponent } from '../campaigns/campaigns.component';
import {Campaign} from '../campaign'
import { LoginService } from '../login.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-addcampaign',
  templateUrl: './addcampaign.component.html',
  styleUrls: ['./addcampaign.component.scss']
})
export class AddcampaignComponent implements OnInit {
  alert:boolean=false;
  campaign = new Campaign();
  msg ='';
  constructor(private _service:LoginService, private _router :Router, private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }

  addCampaign(){
    this.spinner.show();
    this._service.addCampaignFromRemote(this.campaign).subscribe(
      
      data => {
        this.spinner.hide();
        console.log("Success");
        this.alert=true; 
      },
      error => {
        this.spinner.hide();
        console.log("Exception occured");
        this.msg=error.error;
      }

    )
  }
  closeAlert(){
    this.alert=false;
  }
}
