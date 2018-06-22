import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { BrowserAnimationsmodule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SignupComponent
    
  ],
   imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
