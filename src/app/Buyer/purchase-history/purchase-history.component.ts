import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BuyerService } from 'src/app/service/buyer.service';
import { Items } from 'src/app/Models/items';
import { PurchaseHistory } from 'src/app/Models/purchase-history';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})

export class PurchaseHistoryComponent implements OnInit {
  phlist:PurchaseHistory[];
  count:number;
  constructor(private service:BuyerService,private route:Router) { 
    let bid=localStorage.getItem('bid');
    this.service.Purchasehistory(bid).subscribe(res=>{
      this.phlist=res;
      console.log(this.phlist);
    })

    if(localStorage.getItem('bid'))
    {
      let bid=localStorage.getItem('bid');
      this.service.GetCount(bid).subscribe(res=>{
        this.count=res;
      })
    }
  }

  ngOnInit() {
    
  }
  
  Logout(){
    localStorage.clear();
    this.route.navigateByUrl('/login')
  }
}
