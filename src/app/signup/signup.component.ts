import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {

  signupForm:any = FormGroup;
  constructor(private formBuilder: FormBuilder ) { }

  ngOnInit(): void {

    this.signupForm= this.formBuilder.group({
      username: ['', [Validators.required, ]],
      password: ['', [Validators.required,]],
      confirmPassword: ['', [Validators.required, ]],
      email: ['', [Validators.required,]],
    });  
  
  }
  
  onSubmit() {
    console.log( this.signupForm.value)
   
    }

}
