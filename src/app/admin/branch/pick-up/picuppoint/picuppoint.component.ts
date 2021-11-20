import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-picuppoint',
  templateUrl: './picuppoint.component.html',
  styleUrls: ['./picuppoint.component.css']
})
export class PicuppointComponent implements OnInit {

  pickup:any=FormGroup

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.pickup=this.fb.group({
      testCode: ['', [Validators.required]],
      //  Validators.pattern(RegexEnum.name)],
    testName: ['', [Validators.required]],
   
    labName: ['', [Validators.required]],
    patientName: ['', [Validators.required]],
    mrp: ['', [Validators.required]],
    })
  }
  onsubmit(){
    console.log("formdata",this.pickup.value);
}
}
