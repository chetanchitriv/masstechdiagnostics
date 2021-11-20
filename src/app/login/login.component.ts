import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  loginForm:any=FormGroup;
constructor(private router: Router, private formBuilder: FormBuilder) { }
ngOnInit(): void {

  this.loginForm= this.formBuilder.group({
    username: ['', [Validators.required, ]],
    password: ['', [Validators.required,]],
  
  });  

}

 
onSubmit() {
  console.log( this.loginForm.value)
 
  }
}