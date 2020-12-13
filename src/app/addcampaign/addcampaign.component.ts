import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { CampaignsComponent } from '../campaigns/campaigns.component';
import {Campaign} from '../campaign'
import { LoginService } from '../login.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { formatDate } from '@angular/common';
import { Duration } from 'ngx-bootstrap/chronos/duration/constructor';


@Component({
  selector: 'app-addcampaign',
  templateUrl: './addcampaign.component.html',
  styleUrls: ['./addcampaign.component.scss']
})
export class AddcampaignComponent implements OnInit {
  alert:boolean=false;
  campaign = new Campaign();
  msg ='';
 daterange=[]
 date1;
 date2;
 campaignobj: Campaign={
   campaignName: null,
   startDate: null,
   endDate: null,
   status:null
 }
  constructor(private _service:LoginService, private _router :Router, private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }

  addCampaign(){
    this.spinner.show();
    //const date1= new Date(this.daterange[0]);
    //const date2= new Date(this.daterange[1]);
    //moment(date1, 'DD-MM-YYYY').format('DD MMM');
   //this.daterange[0]=formatDate('date1','dd mmm yyyy','en');
    //this.daterange[1]=formatDate('date2','dd mmm yyyy','en');
    console.log("dd1 "+ this.daterange[0]);
    console.log("dd2 "+this.daterange[1]);
    //const date3=formatDate('this.daterange[0]','DD MMM','en')
    //const date4=formatDate('this.daterange[1]','DD MMM, YYYY','en')
    //console.log("date1"+date3);
    //console.log("date2"+date4);
   //this.campaign.duration=JSON.stringify(formatDate('this.campaign.duration','DD MMM','en'));
   this.campaign.startDate=this.daterange[0];
   this.campaign.endDate=this.daterange[1];
   console.log(this.campaign.campaignName);
   console.log(this.campaign.startDate);
   console.log(this.campaign.endDate);
   console.log(this.campaign.status);
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
