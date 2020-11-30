
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

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
  constructor(private _service:LoginService, private _router: Router) { }

  ngOnInit() {
    this._service.getCampaignDetailsFromRemote().subscribe(
      Response => {
        console.log("return response  ___"+JSON.stringify({Response}));
        this.lis=Response;
      },
      error => {
        console.log("response received DATA @@@"+JSON.stringify({ error }));
        console.log("exception occured");
      }
    )
  }
  goToAddCampaign(){
    this._router.navigate(['/addCampaign']);
  }

}
