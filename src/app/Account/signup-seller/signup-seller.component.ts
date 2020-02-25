import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Seller } from 'src/app/Models/seller';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup-seller',
  templateUrl: './signup-seller.component.html',
  styleUrls: ['./signup-seller.component.css']
})
export class SignupSellerComponent implements OnInit {

    SignupForm: FormGroup;
    submitted :boolean;
    list:Seller[];
    seller:Seller;

    constructor(private formBuilder: FormBuilder,private service:UserService) { }

    ngOnInit() {
        this.SignupForm = this.formBuilder.group({
            sid: ['', Validators.required],
            username:['',[Validators.required,Validators.pattern('^[a-z]{3,20}$')]],
            password:['',[Validators.required,Validators.pattern('^[a-z]{7}[~!@#$%^&*()]$')]],
            companyname:['',[Validators.required,Validators.pattern('^[a-z]{3,20}$')]],
            gstin:['',[Validators.required,Validators.pattern('^[A-Za-z]{3,10}$')]],
            briefaboutcompany:['',[Validators.required,Validators.pattern('^[A-Za-z]{3,20}$')]],
            address:['',[Validators.required,Validators.pattern('^[A-Za-z0-9]{3,20}$')]],
            website:['',[Validators.required,Validators.pattern('^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}$')]],
            email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
            mobile:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
             
            acceptTerms: [false, Validators.requiredTrue]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.SignupForm.controls; }

    onSubmit() {
        this.submitted = true;   
    // display form values on success
        if (this.SignupForm.valid) {
            this.seller=new Seller();
        this.seller.Sid=this.SignupForm.value["sid"];
        this.seller.Username=this.SignupForm.value["username"];
        this.seller.Password=this.SignupForm.value["password"];
        this.seller.Companyname=this.SignupForm.value["companyname"];
        this.seller.Gstin=this.SignupForm.value["gstin"];
        this.seller.Briefaboutcompany=this.SignupForm.value["briefaboutcompany"];
        this.seller.Postal_address=this.SignupForm.value["address"];
        this.seller.Website=this.SignupForm.value["website"];
        this.seller.Email=this.SignupForm.value["email"];
        this.seller.Mobile=this.SignupForm.value["mobile"];
         
        this.service.SellerSignup(this.seller).subscribe(res=>{
        console.log('Record Added')
        },err=>{
        console.log(err)
        })
            alert('SUCCESS!! :-)\n\n') 
            // console.log(JSON.stringify(this.SignupForm.value));
        }
    }

    onReset() {
        this.submitted = false;
        this.SignupForm.reset();
    }
}