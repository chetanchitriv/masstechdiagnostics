import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addvender',
  templateUrl: './addvender.component.html',
  styleUrls: ['./addvender.component.css']
})
export class AddvenderComponent implements OnInit {

  addVendorForm:any = FormGroup;
  constructor(private formBuilder: FormBuilder ) { }


  ngOnInit(): void {

    this.addVendorForm= this.formBuilder.group({
      addvendor: ['', [Validators.required, ]],

    });  
  
  }
  
  onSubmit() {
    console.log( this.addVendorForm.value)
   
    }


}
