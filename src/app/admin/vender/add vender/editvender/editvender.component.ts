import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editvender',
  templateUrl: './editvender.component.html',
  styleUrls: ['./editvender.component.css']
})
export class EditvenderComponent implements OnInit {
  editVendorForm:any=FormGroup; 
  constructor(private fm:FormBuilder) { }

  ngOnInit(): void {
    this.editVendorForm = this.fm.group({
      //  Validators.pattern(RegexEnum.name)],
      Vendorname:['', [Validators.required]],
  });
}
onSubmit(){
    console.log("formdata",this.editVendorForm);

  }}