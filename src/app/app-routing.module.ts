import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CampaignsComponent} from './campaigns/campaigns.component';


const routes: Routes = [
  {path: '' , component: LoginComponent},
  {path: 'dashboard' , component: DashboardComponent, children: [
      {
        path: 'campaign', // child route path
        component: CampaignsComponent, // child route component that the router renders
      },
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
