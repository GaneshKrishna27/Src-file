import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubCategory } from 'src/app/Models/sub-category';
import { AdminService } from 'src/app/service/admin.service';
@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.css']
})
export class AddSubCategoryComponent implements OnInit {
  subcategoryForm: FormGroup;
    submitted = false;
    subcategory:SubCategory;

    constructor(private formBuilder: FormBuilder,private service:AdminService) { }
    ngOnInit() {

    this.subcategoryForm = this.formBuilder.group({
      SCid: ['', Validators.required],
      SubCategoryname: ['', [Validators.required]],
      Cid:['',[Validators.required]],
      Briefdetails:['',[Validators.required]],
      Gst:['',[Validators.required]],
    
  });
  }

// convenience getter for easy access to form fields
get f() { return this.subcategoryForm.controls; }

onSubmit() {
  this.submitted = true;
   // display form values on success
   if(this.subcategoryForm.valid){
    this.subcategory=new SubCategory();
    this.subcategory.scid=this.subcategoryForm.value["SCid"];
    this.subcategory.subcategoryname=this.subcategoryForm.value["SubCategoryname"];
    this.subcategory.cid=this.subcategoryForm.value["Cid"];
    this.subcategory.briefdetails=this.subcategoryForm.value["Briefdetails"];
    this.subcategory.gst=this.subcategoryForm.value["Gst"];
    console.log(this.subcategory);
    this.service.Addsubcategory(this.subcategory).subscribe(res=>{
      console.log('Record Added')
    },err=>{
      console.log(err);
    })
    alert('SUCCESS!! :-)\n\n') 
  }
}

onReset() {
  this.submitted = false;
  this.subcategoryForm.reset();
}
}