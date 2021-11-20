import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  master:any=FormGroup; 
  constructor(private fm:FormBuilder) { }

  ngOnInit(): void {
    this.master = this.fm.group({
      //  Validators.pattern(RegexEnum.name)],
      testCode:['', [Validators.required, ]],
        
      testName:['', [Validators.required, ]],
     
      mrp:['', [Validators.required, ]],
      
    });
  }
  onSubmit(){
    console.log("formdata",this.master.value);
    
  }
}