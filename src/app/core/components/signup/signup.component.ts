import { Component, OnInit } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';
import * as firebase from 'firebase';

import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // email: string;
  password: string;
  username: string;
  email= new FormControl('',[
    Validators.required,
    Validators.email
  ]);
 

  constructor(
    public authService: AuthService) { }

  ngOnInit() {
  }
  // loginGoogle() {
  //   this.authService.login(new firebase.auth.GoogleAuthProvider()); 
  // }
  // signup() {
    
  //   this.authService.signup(this.email, this.password);
  //   this.email = this.password = '';
  // }
}
