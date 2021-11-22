import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  master:any=FormGroup; 
  senddata: any={};
  constructor(private fm:FormBuilder,
    private masterservice:MasterService,
    private router:Router) { }

  ngOnInit(): void {
    this.master = this.fm.group({
      //  Validators.pattern(RegexEnum.name)],
      testCode:['', [Validators.required, ]],
        
      testName:['', [Validators.required, ]],
     
      mrp:['', [Validators.required, ]],
      
    });
  }
  create(){
    this.masterservice.createMaster(this.master.value).subscribe(
      (res)=>{
        this.router.navigate(["/dashboard/masterlist"])
      },
      (err)=>{

      }
    );
  }
}