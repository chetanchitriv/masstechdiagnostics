import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editmaster',
  templateUrl: './editmaster.component.html',
  styleUrls: ['./editmaster.component.css']
})
export class EditmasterComponent implements OnInit {

  masteredit:any=FormGroup; 
  constructor(private fm:FormBuilder) { }

  ngOnInit(): void {
    this.masteredit = this.fm.group({
      //  Validators.pattern(RegexEnum.name)],
      testCode:['', [Validators.required]],
        
      testName:['', [Validators.required]],
     
      mrp:['', [Validators.required]],
      
    });
  }
  onsubmit(){
    console.log("formdata",this.masteredit);
    
  }
}
