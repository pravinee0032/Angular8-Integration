import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import {AtsService} from './ats.service';
import { HttpClientModule } from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { UserlistComponent } from './userlist/userlist.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    ForgotComponent,
    LoginComponent,
    UserlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AtsService ],
  bootstrap: [ AppComponent]
})
export class AppModule { }
