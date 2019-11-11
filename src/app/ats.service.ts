import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserDetails} from './Userdetails';

@Injectable({
  providedIn: 'root'
})
export class AtsService {
public apiUrl = 'http://localhost:8081/users';
  constructor(private http: HttpClient ) { }
  public registerUser(user: UserDetails) {
    alert(user.fName);
    return this.http.post<UserDetails>(this.apiUrl, user);
  }
}
