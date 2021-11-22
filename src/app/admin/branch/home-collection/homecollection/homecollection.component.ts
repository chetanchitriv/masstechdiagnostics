import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-homecollection',
  templateUrl: './homecollection.component.html',
  styleUrls: ['./homecollection.component.css']
})
export class HomecollectionComponent implements OnInit {

  homecollection:any=FormGroup

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.homecollection=this.fb.group({
      testCode: ['', [Validators.required]],
      //  Validators.pattern(RegexEnum.name)],
    testName: ['', [Validators.required]],
   
    labName: ['', [Validators.required]],
    patientName: ['', [Validators.required]],
    mrp: ['', [Validators.required]],
    discount:['',[ Validators.required]],
    })
  }
  onsubmit(){
    console.log("formdata",this.homecollection.value);
}
}