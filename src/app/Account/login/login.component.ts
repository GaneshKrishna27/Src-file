import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { Buyer } from 'src/app/Models/buyer';
import { Seller } from 'src/app/Models/seller';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
    submitted = false;
    username:string;
    password:string;
    errmsg:string;
    buyer:Buyer;
    seller:Seller;
    

    constructor(private formBuilder: FormBuilder,private route:Router,private service:UserService) { }

  ngOnInit() {
    this.login = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  

}
// convenience getter for easy access to form fields
get f() { return this.login.controls; }

onSubmit() {
    this.submitted = true;
     // display form values on success
     this.buyer=new Buyer();
     this.seller=new Seller();
     //this.buyer.username=this.itemForm.value["username"];
     //this.buyer.password=this.itemForm.value["password"];
     console.log(this.username);
     console.log(this.password);
     this.service.BuyerSignin(this.username,this.password).subscribe(res=>{
       this.buyer=res;
      if(this.buyer.username==this.username&&this.buyer.password==this.password){
         this.route.navigateByUrl('/buyerindex');
       }
       console.log(this.buyer);
       console.log(this.buyer.username);
       console.log(this.buyer.password);
     })


  //    this.service.SellerSignin(this.Username,this.Password).subscribe(res=>{
  //     this.seller=res;
  //    if(this.seller.Username==this.Username&&this.seller.Password==this.Password){
  //     this.route.navigateByUrl('/sellerindex');
  //   }
  //   console.log(this.seller);
  //   console.log(this.seller.Username);
  //   console.log(this.seller.Password);
  // })


     if(this.username=="Admin" && this.password=="admin")
     {
       this.route.navigateByUrl('adminindex');
     }
     else
     {
       this.errmsg="Invalid Credentials";
     }
}

onReset() {
    this.submitted = false;
    this.login.reset();
}
}