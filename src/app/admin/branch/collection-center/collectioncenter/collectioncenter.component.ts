import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-collectioncenter',
  templateUrl: './collectioncenter.component.html',
  styleUrls: ['./collectioncenter.component.css']
})
export class CollectioncenterComponent implements OnInit {

  collection:any=FormGroup

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.collection=this.fb.group({
      testCode: ['', [Validators.required]],
      //  Validators.pattern(RegexEnum.name)],
    testName: ['', [Validators.required]],
   
    labName: ['', [Validators.required]],
    patientName: ['', [Validators.required]],
    mrp: ['', [Validators.required]],
    })
  }
  onSubmit(){
    console.log("formdata",this.collection.value);
}

}
