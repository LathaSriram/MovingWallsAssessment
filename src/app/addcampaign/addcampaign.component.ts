import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { CampaignsComponent } from '../campaigns/campaigns.component';
import {Campaign} from '../campaign'
import { LoginService } from '../login.service';
@Component({
  selector: 'app-addcampaign',
  templateUrl: './addcampaign.component.html',
  styleUrls: ['./addcampaign.component.scss']
})
export class AddcampaignComponent implements OnInit {
  alert:boolean=false;
  campaign = new Campaign();
  msg ='';
  constructor(private _service:LoginService, private _router :Router) { }

  ngOnInit() {
  }

  addCampaign(){
    console.log("getting method ---"+this.campaign.campaignName, this.campaign.duration);
   
    this._service.addCampaignFromRemote(this.campaign).subscribe(
      
      data => {
        console.log("Success");
        console.log("response add campaign @@@"+JSON.stringify({ data }));
        this.alert=true; 
      },
      error => {
        console.log("response add campaign error @@@"+JSON.stringify({ error }));
        console.log("Exception occured");
        this.msg=error.error;
      }

    )
  }
  closeAlert(){
    this.alert=false;
  }
}
