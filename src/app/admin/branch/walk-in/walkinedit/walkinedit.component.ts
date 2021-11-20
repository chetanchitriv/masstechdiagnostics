import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-walkinedit',
  templateUrl: './walkinedit.component.html',
  styleUrls: ['./walkinedit.component.css']
})
export class WalkineditComponent implements OnInit {

  walkinEdit:any=FormGroup; 
  constructor(private fm:FormBuilder) { }

  ngOnInit(): void {
    this.walkinEdit = this.fm.group({
      //  Validators.pattern(RegexEnum.name)],
      testCode:['', [Validators.required]],
        
      testName:['', [Validators.required]],
     
      mrp:['', [Validators.required]],
      
    });
  }
  onsubmit(){
    console.log("formdata",this.walkinEdit);
    
  }

}
