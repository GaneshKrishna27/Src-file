import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  EditProfileForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.EditProfileForm = this.formBuilder.group({
          
          username:['',[Validators.required,Validators.pattern('^[a-z]{3,20}$')]],
          password:['',[Validators.required,Validators.pattern('^[a-z]{7}[~!@#$%^&*()]$')]],
          email: ['', [Validators.required, Validators.email]],
          mobile:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
         
          
         
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.EditProfileForm.controls; }

  onSubmit() {
      this.submitted = true;
       // display form values on success
      if (this.EditProfileForm.valid) {
          alert('SUCCESS!! :-)\n\n') 
          console.log(JSON.stringify(this.EditProfileForm.value));
      }
  }

  onReset() {
      this.submitted = false;
      this.EditProfileForm.reset();
  }
}
