import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Observable}from 'rxjs'
import{Seller}from '../Models/seller';
import { Items } from '../Models/items';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
})}

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  url:string='http://localhost:63845/Item/'
  url1:string='http://localhost:63845/Seller/'

  constructor(private http:HttpClient) { }
  public Getitem(Iid:string):Observable<Items>
  {
    return this.http.get<Items>(this.url+'Getitem/'+Iid,Requestheaders);
  }
  public Additem(items:Items):Observable<any>
  {
    return this.http.post<any>(this.url+'Additem',JSON.stringify(items),Requestheaders);
  }
  public Viewitems(Sid:string):Observable<any>
  {
    return this.http.get<any>(this.url+'Viewitems/'+Sid,Requestheaders);
  }
  public Updateitem(items:Items):Observable<any>
  {
    return this.http.put<any>(this.url+'Updateitem',Requestheaders);
  }
  public Deleteitem(Iid:string):Observable<Items>
  {
    return this.http.delete<Items>(this.url+'Deleteitem/'+Iid,Requestheaders);
  }
  public GetById(Sid:string):Observable<Seller>
  {
    return this.http.get<Seller>(this.url1+'GetById/'+Sid,Requestheaders);

  }
  public Editprofile(seller:Seller):Observable<any>
  {
    return this.http.put<any>(this.url1+'Editprofile',JSON.stringify(seller),Requestheaders);
  }

}
