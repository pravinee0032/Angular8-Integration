import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import {ForgotComponent} from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
 { path : 'home', component : AppComponent},
 {path : 'signup', component : SignupComponent},
 {path : 'forgot', component : ForgotComponent},
 {path : 'login' , component : LoginComponent},
 {path : '', redirectTo : 'login', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
