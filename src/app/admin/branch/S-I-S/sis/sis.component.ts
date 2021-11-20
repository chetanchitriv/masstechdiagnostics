import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sis',
  templateUrl: './sis.component.html',
  styleUrls: ['./sis.component.css']
})
export class SisComponent implements OnInit {

  sis:any=FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.sis=this.fb.group({
      testCode: ['', [Validators.required]],
      //  Validators.pattern(RegexEnum.name)],
    testName: ['', [Validators.required]],
   
    labName: ['', [Validators.required]],
    patientName: ['', [Validators.required]],
    mrp: ['', [Validators.required]],
    })
  }
  onsubmit(){
    console.log("formdata",this.sis.value);
}
}
