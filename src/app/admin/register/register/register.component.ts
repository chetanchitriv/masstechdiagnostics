import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register:any=FormGroup

  constructor(private fb:FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
    this.register=this.fb.group({
      testCode: ['', [Validators.required]],
      //  Validators.pattern(RegexEnum.name)],
    testName: ['', [Validators.required]],
   
    labName: ['', [Validators.required]],
    patientName: ['', [Validators.required]],
    mrp: ['', [Validators.required]],
    })
  }
  onsubmit(){
    this.router.navigate(['/dashboard/registerlist']);
    console.log("formdata",this.register.value);
  }
}
