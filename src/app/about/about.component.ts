import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  name: string ='';
  email: string ='';
  phone: string = '';
  gender: string = '';
  country: string = 'India';
  address: string = '';
  hobbies: string = '';

	RegisterList = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required]
      // lastName: ['', Validators.required],
      // email: ['', [Validators.required, Validators.email]],
      // password: ['', [Validators.required, Validators.minLength(6)]]
  });
    

  }
  get f() { return this.registerForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)')
  

  }



   addRegItem(ngForm)
   {
    
    this.submitted = true;

     if(ngForm.invalid)
     {
       return;
     }
     else{
      this.RegisterList.push({
      'name': this.name,
      'email': this.email,
      'phone': this.phone,
      'gender': this.gender,
      'hobbies': this.hobbies,
      'country': this.country,
      'address': this.address});
 
      // this.name = '';
      // this.email = '';
      // this.phone = '';
      // this.gender = '';
      // this.hobbies = '';
      // this.country = '';
      // this.address = '';
 
     }

    
     }

    editRegItem(i){
      this.name=this.RegisterList[i] ['name'];
      this.email=this.RegisterList[i] ['email'];
      this.phone=this.RegisterList[i] ['phone'];
      this.gender=this.RegisterList[i] ['gender'];
      this.hobbies=this.RegisterList[i] ['hobbies'];
      this.country=this.RegisterList[i] ['country'];
      this.address=this.RegisterList[i] ['address'];

    }


    deleteRegItem(i)
    {
	      this.RegisterList.splice(i,1);
    }






}
