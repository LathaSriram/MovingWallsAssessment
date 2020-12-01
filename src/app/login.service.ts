import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Campaign } from './campaign';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http : HttpClient) {}
  public loginUserFromRemote(user :User):Observable<any>{
  //return this._http.post("http://ec2-3-135-228-77.us-east-2.compute.amazonaws.com:8080/login",user);
  return this._http.post("http://localhost:8080/login",user);
  }
  public getCampaignDetailsFromRemote():Observable<any>{
    return this._http.get("http://localhost:8080/listCampain");
  }
  public addCampaignFromRemote(campaign :Campaign):Observable<any>{
    console.log("response add campaign request @@@"+JSON.stringify({ campaign }));
  
return this._http.post("http://localhost:8080/addCampain",campaign);
  }
  public addUserFromRemote(user : User):Observable<any>{
    return this._http.post("http://localhost:8080/signup",user);
  }
}
