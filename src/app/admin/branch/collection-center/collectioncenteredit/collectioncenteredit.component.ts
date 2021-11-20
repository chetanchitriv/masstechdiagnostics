import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-collectioncenteredit',
  templateUrl: './collectioncenteredit.component.html',
  styleUrls: ['./collectioncenteredit.component.css']
})
export class CollectioncentereditComponent implements OnInit {

  collectionedit:any=FormGroup; 
  constructor(private fm:FormBuilder) { }

  ngOnInit(): void {
    this.collectionedit = this.fm.group({
      //  Validators.pattern(RegexEnum.name)],
      testCode:['', [Validators.required]],
        
      testName:['', [Validators.required]],
     
      mrp:['', [Validators.required]],
      
    });
  }
  onsubmit(){
    console.log("formdata",this.collectionedit);
    
  }

}


