import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from 'src/app/service/seller.service';
import { Seller } from 'src/app/Models/seller';


@Component({
  selector: 'app-sellerindex',
  templateUrl: './sellerindex.component.html',
  styleUrls: ['./sellerindex.component.css']
})
export class SellerindexComponent implements OnInit {
  seller:Seller;

  constructor(private route:Router,private service:SellerService) {
    if(!(localStorage.getItem('token'))){
      this.route.navigateByUrl('/home');
    }

    let sid=localStorage.getItem('sid');
    console.log(sid);
    this.service.GetById(sid).subscribe(res=>{
      this.seller=res;
      console.log(this.seller);
    })
   }

  ngOnInit() {
  }
  
}
