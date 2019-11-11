import { Component, OnInit } from '@angular/core';

import { AtsService } from '../ats.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
public data = [];
  constructor(private detail: AtsService) { }

  ngOnInit() {
  }
  public submitUser(user) {

    this.detail.registerUser(user);
  }
}
