import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getData(url: string) {
    return this.http.get(url, { withCredentials: true })
  }

  editData(url: string, obj: User) {
    let params = new URLSearchParams();
    params.set('name', obj.name);

    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});

    return this.http.post(url, params.toString(), { headers: headers, withCredentials: true })
      .map((resp:Response) => resp.json())
      .catch((error:any) => {return Observable.throw(error);});
  }

  login(url: string, obj: User) {
      let params = new URLSearchParams();
      params.set('email', obj.email);
      params.set('password', obj.password);

      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});

      return this.http.post(url, params.toString(), { headers: headers, withCredentials: true })
        .map((resp:Response) => resp.json())
        .catch((error:any) => {return Observable.throw(error);});
  }

  logout(url: string) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});

    return this.http.post(url, null, { headers: headers, withCredentials: true })
      .map((resp:Response) => resp.json())
      .catch((error:any) => {return Observable.throw(error);});
  }
}
