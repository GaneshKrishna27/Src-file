import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editprofiles',
  templateUrl: './editprofiles.component.html',
  styleUrls: ['./editprofiles.component.css']
})
export class EditprofilesComponent implements OnInit {

  editprofilesForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.editprofilesForm = this.formBuilder.group({
            
            username:['',[Validators.required,Validators.pattern('^[a-z]{3,20}$')]],
            password:['',[Validators.required,Validators.pattern('^[a-z]{7}[~!@#$%^&*()]$')]],
            companyname:['',[Validators.required,Validators.pattern('^[a-z]{3,20}$')]],
            Gstin:['',[Validators.required,Validators.pattern('^[a-z]{3,10}$')]],
            briefaboutcompany:['',[Validators.required]],
            address:['',[Validators.required]],
            website:['',[Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            mobile:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
             
            
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.editprofilesForm.controls; }

    onSubmit() {
        this.submitted = true;
         // display form values on success
        if (this.editprofilesForm.valid) {
            alert('SUCCESS!! :-)\n\n') 
            console.log(JSON.stringify(this.editprofilesForm.value));
        }
    }

    onReset() {
        this.submitted = false;
        this.editprofilesForm.reset();
    }
}