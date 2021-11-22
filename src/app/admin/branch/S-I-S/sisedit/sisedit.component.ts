import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sisedit',
  templateUrl: './sisedit.component.html',
  styleUrls: ['./sisedit.component.css']
})
export class SiseditComponent implements OnInit {

  sisEdit:any=FormGroup; 
  constructor(private fm:FormBuilder) { }

  ngOnInit(): void {
    this.sisEdit = this.fm.group({
      //  Validators.pattern(RegexEnum.name)],
      testCode:['', [Validators.required]],
        
      testName:['', [Validators.required]],
      labName: ['', [Validators.required]],
    patientName: ['', [Validators.required]],
     
      mrp:['', [Validators.required]],
      
    });
  }
  onsubmit(){
    console.log("formdata",this.sisEdit);
    
  }

}


