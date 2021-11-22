import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register:any=FormGroup

  constructor(private fb:FormBuilder,
    private router:Router,
    private registerservice:RegisterService) { }

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
    console.log("formdata",this.register.value);
    this.registerservice.postResgister(this.register.value).subscribe(
      (response)=>{
        console.log(response);
        
      },
      (error=>{

      })
    );
  }
}
