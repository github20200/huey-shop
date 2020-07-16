import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'shared/shared.module';

import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { PhoneLoginComponent } from './components/phone-login/phone-login.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  imports: [
    SharedModule,
    AngularFontAwesomeModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent },
      { path: 'register', component: SignupComponent },
      { path: 'forgotpassword', component: ForgotpasswordComponent },
      { path: 'phone-login', component: PhoneLoginComponent }
    ])
  ],
  declarations: [
    BsNavbarComponent,
    LoginComponent,
    FooterComponent,
    SignupComponent,
    ForgotpasswordComponent,
    PhoneLoginComponent
  ],
  exports: [
    BsNavbarComponent,
    FooterComponent
  ]
})
export class CoreModule { }
