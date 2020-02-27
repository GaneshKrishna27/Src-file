import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Observable}from 'rxjs'
import { Buyer } from '../Models/buyer';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
})}

@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  url:string='http://localhost:63845/Buyer/'

  constructor(private http:HttpClient) { }
  public GetById(Bid:string):Observable<Buyer>
  {
    return this.http.get<Buyer>(this.url+'GetById/'+Bid,Requestheaders);

  }
  public Editprofile(buyer:Buyer):Observable<any>
  {
    return this.http.put<any>(this.url+'Editprofile',JSON.stringify(buyer),Requestheaders);
  }
}
