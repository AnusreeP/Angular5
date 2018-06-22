import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import _ from 'lodash';

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
  gender: string = 'male';
  country: string = 'Brazil';
  address: string = '';
  hobbyIndex:number;
  editMode:string='false';
  selectedIndex:number;
  edithobbyIndex:number;
  UpdateText:string="Update";
  myHobbies = [ {'name': 'Reading','Selected':true},
              {'name': 'Travelling','Selected':true},
              {'name': 'Photography','Selected':true}]  

	RegisterList = [];
mySelectedHobbies = ['Reading','Travelling','Photography'];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    //this.registerForm = this.formBuilder.group({
      //name: ['', Validators.required]
      // lastName: ['', Validators.required],
      // email: ['', [Validators.required, Validators.email]],
      // password: ['', [Validators.required, Validators.minLength(6)]]
  //});
    

  }
  //get f() { return this.registerForm.controls; }


  // onSubmit() {
  //   this.submitted = true;

  //   // stop here if form is invalid
  //   if (this.registerForm.invalid) {
  //       return;
  //   }

  

  // }
  selectedHobies(name,event,index) {
    if(event.target.checked === true) {
      this.mySelectedHobbies.push(name);
      this.mySelectedHobbies = _.uniq(this.mySelectedHobbies);
    } else {
      this.hobbyIndex = _.findIndex(this.mySelectedHobbies, function(o) { return o ===  name})
      if(this.hobbyIndex >= 0) {
        this.mySelectedHobbies.splice(this.hobbyIndex,1);
      }
      
    }
  }


   addRegItem(ngForm)
   {
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
      'hobbies': this.mySelectedHobbies,
      'country': this.country,
      'address': this.address});
 
      this.name = '';
      this.email = '';
      this.phone = '';
      this.gender = 'male';
      this.country = 'Brazil';
      this.address = '';
      this.myHobbies = [ {'name': 'Reading','Selected':true},
      {'name': 'Travelling','Selected':true},
      {'name': 'Photography','Selected':true}]  
 
     }

    
     }

    editRegItem(i){
      console.log(this.RegisterList[i]['hobbies']);
      this.myHobbies.map((value, index) => {
       // console.log("8888888888888");
        this.edithobbyIndex = _.findIndex(this.RegisterList[i]['hobbies'], function (o) {
         // console.log(o,"gg0")
           return o === value.name;
           });
       // console.log( this.edithobbyIndex," this.edithobbyIndex");
        if (this.edithobbyIndex < 0) {
          this.myHobbies[index].Selected = false;
        }
      });
      console.log(this.myHobbies,"sssdsd");
      this.editMode='true';
      this.name=this.RegisterList[i] ['name'];
      this.email=this.RegisterList[i] ['email'];
      this.phone=this.RegisterList[i] ['phone'];
      this.gender=this.RegisterList[i] ['gender'];
     // this.hobbies=this.RegisterList[i] ['hobbies'];
      this.country=this.RegisterList[i] ['country'];
      this.address=this.RegisterList[i] ['address'];
      this.selectedIndex = i;

    }
    Update(regForm) {
      this.RegisterList[this.selectedIndex] ['name'] = this.name;
      this.RegisterList[this.selectedIndex] ['email'] =  this.email;
      this.RegisterList[this.selectedIndex] ['phone'] =  this.phone;
      this.RegisterList[this.selectedIndex] ['gender'] =  this.gender;
      this.RegisterList[this.selectedIndex] ['country'] =  this.country;
      this.RegisterList[this.selectedIndex] ['country'] =  this.country;
      this.RegisterList[this.selectedIndex] ['address'] =  this.address;
      this.name = '';
      this.email = '';
      this.phone = '';
      this.gender = 'male';
      this.country = 'Brazil';
      this.address = '';
      this.myHobbies = [ {'name': 'Reading','Selected':true},
      {'name': 'Travelling','Selected':true},
      {'name': 'Photography','Selected':true}]  
      this.editMode='false';

    }


    deleteRegItem(i)
    {
	      this.RegisterList.splice(i,1);
    }
    checkedStatus(hobby) {
      return hobby.Selected;
    }






}
