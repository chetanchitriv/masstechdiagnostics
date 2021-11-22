import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pickupedit',
  templateUrl: './pickupedit.component.html',
  styleUrls: ['./pickupedit.component.css']
})
export class PickupeditComponent implements OnInit {

  pickuppoint:any=FormGroup; 
  constructor(private fm:FormBuilder) { }

  ngOnInit(): void {
    this.pickuppoint = this.fm.group({
      //  Validators.pattern(RegexEnum.name)],
      testCode:['', [Validators.required]],
        
      testName:['', [Validators.required]],
      labName: ['', [Validators.required]],
    patientName: ['', [Validators.required]],
     
      mrp:['', [Validators.required]],
      
    });
  }
  onsubmit(){
    console.log("formdata",this.pickuppoint);
    
  }

}