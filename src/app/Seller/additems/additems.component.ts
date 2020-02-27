import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Items } from 'src/app/Models/items';
import { SellerService } from 'src/app/service/seller.service';
@Component({
  selector: 'app-additems',
  templateUrl: './additems.component.html',
  styleUrls: ['./additems.component.css']
})
export class AdditemsComponent implements OnInit {
  additemsForm: FormGroup;
    submitted = false;
    items:Items

    constructor(private formBuilder: FormBuilder,private service:SellerService) { }
    ngOnInit() {

    this.additemsForm = this.formBuilder.group({
      Iid: ['', Validators.required],
      Cid: ['', Validators.required],
      SCid: ['', [Validators.required]],
      Sid: ['', [Validators.required]],
      Itemname:['',[Validators.required]],
      Price:['',[Validators.required]],
      Description:['',[Validators.required]],
      Stock:['',[Validators.required]],
      Remarks:['',[Validators.required]],
      Photo:['']

    
  });
  }

// convenience getter for easy access to form fields
get f() { return this.additemsForm.controls; }

onSubmit() {
  this.submitted = true;
   // display form values on success
   if(this.additemsForm.valid){
    this.items=new Items();
    this.items.iid=(this.additemsForm.value["Iid"]),   
    this.items.cid=this.additemsForm.value["Cid"],
    this.items.scid=this.additemsForm.value["SCid"],
    this.items.sid=this.additemsForm.value["Sid"],  
    this.items.itemname=this.additemsForm.value["Itemname"],
    this.items.price=Number(this.additemsForm.value["Price"]),
    this.items.description=this.additemsForm.value["Description"],  
    this.items.stock=Number(this.additemsForm.value["Stock"]),
    this.items.remarks=this.additemsForm.value["Remarks"],
    this.items.photo=this.additemsForm.value["Photo"]
    
    console.log(this.items);
    this.service.Additem(this.items).subscribe(res=>{
      console.log('Items Added');
    },err=>{
      console.log(err);
    })
    alert('SUCCESS!! :-)\n\n') 
  }
}

onReset() {
  this.submitted = false;
  this.additemsForm.reset();
}
}
