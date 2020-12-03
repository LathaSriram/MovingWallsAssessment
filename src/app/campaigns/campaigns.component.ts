
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { NgxSpinnerService } from 'ngx-spinner';
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
  constructor(private _service:LoginService, private _router: Router,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this._service.getCampaignDetailsFromRemote().subscribe(
      Response => {
        this.spinner.hide();
        this.lis=Response;
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

}
