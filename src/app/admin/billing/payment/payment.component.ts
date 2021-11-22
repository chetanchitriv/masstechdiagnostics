import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payment:any=FormGroup

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.payment=this.fb.group({
      creditamounnt: ['', [Validators.required]],
      //  Validators.pattern(RegexEnum.name)],
      paidamount: ['', [Validators.required]],
   
      balamount: ['', [Validators.required]],
      paymentdate: ['', [Validators.required]],
   
    })
  }
  onsubmit(){
  
    console.log("formdata",this.payment.value);
  }
}
