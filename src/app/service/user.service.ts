import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Observable}from 'rxjs'
import { Buyer } from '../Models/buyer';
import{Seller}from '../Models/seller';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
  'Authorization':'Bearer'+localStorage.getItem('token')
})}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string='http://localhost:63845/User/'

  constructor(private http:HttpClient) { }
  public BuyerSignin(username:string,password:string):Observable<any>
  {
    return this.http.get<any>(this.url+'BuyerSignin/'+username+'/'+password,Requestheaders);
  }
  public SellerSignin(username:string,password:string):Observable<any>
  {
    return this.http.get<any>(this.url+'SellerSignin/'+username+'/'+password,Requestheaders);
  }
  public BuyerSignup(buyer:Buyer):Observable<any>
  {
    return this.http.post<any>(this.url+'BuyerSignup',JSON.stringify(buyer),Requestheaders);
  }
  public SellerSignup(seller:Seller):Observable<any>
  {
    return this.http.post<any>(this.url+'SellerSignup',JSON.stringify(seller),Requestheaders);
  }
}
