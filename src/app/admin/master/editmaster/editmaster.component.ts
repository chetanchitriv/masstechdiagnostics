import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-editmaster',
  templateUrl: './editmaster.component.html',
  styleUrls: ['./editmaster.component.css']
})
export class EditmasterComponent implements OnInit {

  masteredit:any=FormGroup; 
  currentid: any;
  currentData: any={};
  constructor(private fm:FormBuilder,
    private masterservice:MasterService,
    private activeroute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.masteredit = this.fm.group({
      //  Validators.pattern(RegexEnum.name)],
      test_code:['', [Validators.required]],
        
      test_name:['', [Validators.required]],
     
      mrp:['', [Validators.required]],
      
    });
    this.currentid=this.activeroute.snapshot.params.id
    this.getmaster()
  }

  getmaster(){
    this.masterservice.getcurrentdata(this.currentid).subscribe(
      (res)=>{
         this.currentData=res;
         this.masteredit.patchValue(res);
      },
      (err)=>{

      }
    )
  }

  onsubmit(){
    console.log("formdata",this.masteredit);
    this.masterservice.updatemaster(this.currentid,this.masteredit.value).subscribe(
      (res)=>{
         this.router.navigate(["dashboard/masterlist"])
      },
      (err)=>{

      }
    )
   
    
  }
}
