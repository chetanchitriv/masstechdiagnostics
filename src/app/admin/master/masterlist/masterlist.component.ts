import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-masterlist',
  templateUrl: './masterlist.component.html',
  styleUrls: ['./masterlist.component.css']
})
export class MasterlistComponent implements OnInit {
  masterlist: any=[];
  deleteId: any;

  constructor(
    private masterservice:MasterService
  ) { }

  ngOnInit(): void {
    this.getmasterlist();
  }

  getmasterlist(){
    this.masterservice.getmasters().subscribe(
      (res)=>{
         this.masterlist=res
      },
      (err)=>{

      }
    )
  }
  delete(id: any) {
    this.deleteId=id
    this.masterservice.deleteMaster(id).subscribe(
      (res)=>{
       
      },
      (err)=>{

      }
    )
  }
      
}
