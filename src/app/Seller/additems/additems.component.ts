import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-additems',
  templateUrl: './additems.component.html',
  styleUrls: ['./additems.component.css']
})
export class AdditemsComponent implements OnInit {
  additemsForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }
    ngOnInit() {

    this.additemsForm = this.formBuilder.group({
      category: ['', Validators.required],
      subcategory: ['', [Validators.required]],
      itemname:['',[Validators.required]],
      price:['',[Validators.required]],
      desc:['',[Validators.required]],
      stock:['',[Validators.required]],
      remarks:['',[Validators.required]],
      photo:['',[Validators.required]],
    
  });
  }

// convenience getter for easy access to form fields
get f() { return this.additemsForm.controls; }

onSubmit() {
  this.submitted = true;
   // display form values on success
  if (this.additemsForm.valid) {
      alert('SUCCESS!! :-)\n\n') 
      console.log(JSON.stringify(this.additemsForm.value));
  }
}

onReset() {
  this.submitted = false;
  this.additemsForm.reset();
}
}
