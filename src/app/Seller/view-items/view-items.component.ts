import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators}from'@angular/forms';
import { Items } from 'src/app/Models/items';
import { SellerService } from 'src/app/service/seller.service';
import { Category } from 'src/app/Models/category';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {
  items:Items;
  list:Items[];
  itemForm:FormGroup;
  category:Category[];

  constructor(private service:SellerService,private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.itemForm=this.formbuilder.group({
      Iid:['',[Validators.required,Validators.pattern('^[0-9]{3,8}$')]],
      // Cid:[''],
      // SCid:[''],
      Itemname:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{3,20}$')]],
      Description:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{3,20}$')]],
      Price:['',[Validators.required,Validators.pattern('^[1-9][0-9]{3,20}$')]],
      Stock:['',[Validators.required,Validators.pattern('^[0-9]{0,20}$')]],
      Remarks:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{0,80}$')]],
      // Sid:['']
    })
    this.Viewitems();
  }
  Search(id:string){
    this.service.Getitems(id).subscribe(res=>{
      this.items=res;
      console.log(this.items);
      this.itemForm.setValue({
        Iid:this.items.iid,
        Itemname:this.items.itemname,
        Description:this.items.description,
        Price:this.items.price,
        Stock:this.items.stock,
        Remarks:this.items.remarks
      })
  
  
    },err=>{
      console.log(err);
    })
  }

  
  Update(){
      this.items=new Items();
      this.items.iid=(this.itemForm.value["Iid"]);//I+Math.floor(Math.random()*10000)
      this.items.itemname=this.itemForm.value["Itemname"];
      this.items.cid=this.itemForm.value["Cid"];
      this.items.scid=this.itemForm.value["SCid"];
      this.items.description=this.itemForm.value["Description"];
      this.items.price=Number(this.itemForm.value["Price"]);
      this.items.stock=Number(this.itemForm.value["Stock"]);
      this.items.remarks=this.itemForm.value["Remarks"];
      this.items.sid=this.itemForm.value["Sid"];
      console.log(this.items);
      this.service.Updateitem(this.items).subscribe(res=>{
        console.log('added');
        alert('Updated')
      },err=>{
        console.log(err);
      })
     
    }

  Deleteitem(iid:string):void{
    this.service.Deleteitem(iid).subscribe(res=>{
      console.log("record deleted");
      this.Viewitems();
    },
    err=>
    {
      console.log(err);
    })
   
   }
   Viewitems():void
    {
   this.service.Viewitems("1").subscribe(res=>
     {
       this.list=res;
       console.log(this.list)
     },
     err=>{
       console.log(err);
     })
   }

}
