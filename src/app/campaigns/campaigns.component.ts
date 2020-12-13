import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { OrderPipe } from 'ngx-order-pipe';
import {Campaign} from '../campaign'

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent implements OnInit {
  search =null;
  p= null;
  li: any;
  lis= [];
  len: any;
  campaignobj: Campaign={
    campaignName: null,
    startDate: null,
    endDate: null,
    status:null
  }
  order: string = 'campaignName';
  reverse: boolean = false;
  sortedCollection: any[];
  constructor(private _service:LoginService, private _router: Router,private spinner: NgxSpinnerService,private orderPipe: OrderPipe) {}

  ngOnInit() {
    this.spinner.show();
    
    this._service.getCampaignDetailsFromRemote().subscribe(
      Response => {
        this.spinner.hide();
        this.lis=Response;
        //this.sortedCollection = this.orderPipe.transform(this.lis, 'Campaign.campaignName');
        console.log(Campaign);
        //this.len=this.lis.length;
      },
      error => {
        this.spinner.hide();
        console.log("exception occured");
      }
    )
  }
  goToAddCampaign(){
    this._router.navigate(['/addCampaign']);
  }
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }
}
