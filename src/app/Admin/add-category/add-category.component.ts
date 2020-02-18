import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  categoryForm: FormGroup;
    submitted = false;


    constructor(private formBuilder: FormBuilder) { }
    ngOnInit() {

    this.categoryForm = this.formBuilder.group({
      categoryid: ['', Validators.required],
      
      categoryname: ['', [Validators.required]],
      
      description:['',[Validators.required]],
      
  });
  }

// convenience getter for easy access to form fields
get f() { return this.categoryForm.controls; }

onSubmit() {
  this.submitted = true;
   // display form values on success
  if (this.categoryForm.valid) {
      alert('SUCCESS!! :-)\n\n') 
      console.log(JSON.stringify(this.categoryForm.value));
  }
}

onReset() {
  this.submitted = false;
  this.categoryForm.reset();
}
}