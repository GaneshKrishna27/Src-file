import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

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
    if (this.login.valid) {
        alert('SUCCESS!! :-)\n\n') 
        console.log(JSON.stringify(this.login.value));
    }
}

onReset() {
    this.submitted = false;
    this.login.reset();
}
}