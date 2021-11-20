import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-venderoutsource',
  templateUrl: './venderoutsource.component.html',
  styleUrls: ['./venderoutsource.component.css']
})
export class VenderoutsourceComponent implements OnInit {
  vendorOutsourceForm:any = FormGroup;
  selectvendor:any=FormGroup
  constructor(private formBuilder: FormBuilder ) { }


  ngOnInit(): void {

    this.vendorOutsourceForm = this.formBuilder.group({
      patientName: ['', [Validators.required, ]],
      sample: ['', [Validators.required, ]],
      age: ['', [Validators.required, ]],
      date: ['', [Validators.required, ]],
      amountPaid: ['', [Validators.required, ]],
      amountBalance: ['', [Validators.required, ]],

    });  
    this.selectvendor = this.formBuilder.group({
      selectedVendor: ['', [Validators.required, ]],
    });  
  
  }
  
  onSubmit() {
    console.log( this.vendorOutsourceForm.value)
  }
}
