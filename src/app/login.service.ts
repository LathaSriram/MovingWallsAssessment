import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http : HttpClient) {}
  public loginUserFromRemote(user :User):Observable<any>{
  return this._http.post("http://localhost:8050/login",user)
  }
}
