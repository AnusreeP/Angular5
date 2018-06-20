import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  name: string ='';
  email: string ='';
  phone: string = '';
  hobbies: string = '';
  gender: string = '';
  country: string = '';
  address: string = '';

	RegisterList = [];

  constructor() { }

  ngOnInit() {
  }


  addRegItem(){

    this.RegisterList.push({'name': this.name,
    'email': this.email,
    'phone': this.phone,
    'gender': this.gender,
    'hobbies': this.hobbies,
    'country': this.country,
    'address': this.address});
    this.name = '';

//this.RegisterList.push({'email': this.email});
    this.email = '';

    //this.RegisterList.push({'phone': this.phone});
    this.phone = '';


    //this.RegisterList.push({'gender': this.gender});
    this.gender = '';

    //this.RegisterList.push({'hobbies': this.hobbies});
    this.hobbies = '';

    //this.RegisterList.push({'country': this.country});
    this.country = '';

    //this.RegisterList.push({'address': this.address});
    this.address = '';
    
    }



}
