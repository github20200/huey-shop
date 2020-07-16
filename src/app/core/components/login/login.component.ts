import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  email= new FormControl('',[
    Validators.required,
    Validators.email
  ]);
  password: string;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  // loginGoogle() {
  //   this.authService.login(new firebase.auth.GoogleAuthProvider());
  // }

  // loginFacebook() {
  //   this.authService.login(new firebase.auth.FacebookAuthProvider());
  // }

  // signin() {
  //   this.authService.signin(this.email, this.password);
  //   this.email = this.password = '';    
  // }

}
