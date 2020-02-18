import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.css']
})
export class AddSubCategoryComponent implements OnInit {
  subcategoryForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }
    ngOnInit() {

    this.subcategoryForm = this.formBuilder.group({
      subcategoryid: ['', Validators.required],
      subcategoryname: ['', [Validators.required]],
      categoryid:['',[Validators.required]],
      briefdetails:['',[Validators.required]],
      gstin:['',[Validators.required]],
    
  });
  }

// convenience getter for easy access to form fields
get f() { return this.subcategoryForm.controls; }

onSubmit() {
  this.submitted = true;
   // display form values on success
  if (this.subcategoryForm.valid) {
      alert('SUCCESS!! :-)\n\n') 
      console.log(JSON.stringify(this.subcategoryForm.value));
  }
}

onReset() {
  this.submitted = false;
  this.subcategoryForm.reset();
}
}