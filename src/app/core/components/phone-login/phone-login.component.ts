import { Component, OnInit } from '@angular/core';
import { WindowService } from 'shared/services/window.service';
import * as firebase from 'firebase';


export class PhoneNumber {
  country: string;
  area: string;
  prefix: string;
  line: string;

  get e164() {
    const num = this.country + this.area + this.prefix + this.line
    return `+${num}`
  }
}

@Component({
  selector: 'phone-login',
  templateUrl: './phone-login.component.html',
  styleUrls: ['./phone-login.component.css']
})
export class PhoneLoginComponent implements OnInit {

  windowRef: any;
  phoneNumber = new PhoneNumber();
  verificationCode: string;
  user: any;

  constructor(private win: WindowService,) { }

  ngOnInit() {
    this.windowRef = this.win.windowRef;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    this.windowRef.recaptchaVerifier.render()
    .then( widgetId => {
         this.windowRef.recaptchaWidgetId = widgetId
    });
  }

  sendLoginCode() {

    const appVerifier = this.windowRef.recaptchaVerifier;

    const num = this.phoneNumber.e164;

    firebase.auth().signInWithPhoneNumber(num, appVerifier)
      .then((result) => {
                this.windowRef.confirmationResult = result;
            })
            .catch( (error) => {
              // console.log(error);
              window.alert('Something went wrong: ' + error.message);
            })
          }

  verifyLoginCode() {
    this.windowRef.confirmationResult
      .confirm(this.verificationCode)
        .then( (result) => {
         this.user = result.user
    })
    .catch( (error) =>{
      window.alert('Something went wrong: ' + error.message);
      // console.log(error, "Incorrect code entered?");
    }) 
  }
}
