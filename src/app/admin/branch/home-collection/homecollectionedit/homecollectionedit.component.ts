import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-homecollectionedit',
  templateUrl: './homecollectionedit.component.html',
  styleUrls: ['./homecollectionedit.component.css']
})
export class HomecollectioneditComponent implements OnInit {

  homecollectionedit:any=FormGroup; 
  constructor(private fm:FormBuilder) { }

  ngOnInit(): void {
    this.homecollectionedit = this.fm.group({
      //  Validators.pattern(RegexEnum.name)],
      testCode:['', [Validators.required]],
        
      testName:['', [Validators.required]],
      labName: ['', [Validators.required]],
      patientName: ['', [Validators.required]],
     
      mrp:['', [Validators.required]],
      discount:['',[ Validators.required]],
      
    });
  }
  submit(){
    console.log("formdata",this.homecollectionedit);
    
  }

}