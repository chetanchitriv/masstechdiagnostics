import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-walkin',
  templateUrl: './walkin.component.html',
  styleUrls: ['./walkin.component.css']
})
export class WalkinComponent implements OnInit {

  walkin:any=FormGroup

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.walkin=this.fb.group({
      testCode: ['', [Validators.required]],
      //  Validators.pattern(RegexEnum.name)],
    testName: ['', [Validators.required]],
   
    labName: ['', [Validators.required]],
    patientName: ['', [Validators.required]],
    mrp: ['', [Validators.required]],
    })
  }
  onsubmit(){
    console.log("formdata",this.walkin.value);
}
}

