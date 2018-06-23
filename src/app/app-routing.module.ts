import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { AboutComponent} from './about/about.component';
import { SignupComponent} from './signup/signup.component';
import {  ContactComponent} from './contact/contact.component';

const routes: Routes = [
		{
      path : '',
      component: HomeComponent
    },
    {
      path : 'About',
      component: AboutComponent
    },
    {
      path : 'contact',
      component : ContactComponent
    },
    
    {
      path : 'signup',
      component: SignupComponent
    }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
