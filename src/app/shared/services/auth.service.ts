import { UserService } from './user.service';
import { IAppUser } from '../models/app-user';
import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';



@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;
  

  constructor(public userService: UserService, 
              public afAuth: AngularFireAuth,
              public router: Router
              ) {
    this.user$ = afAuth.authState;
  }

  // login(provider: auth.AuthProvider) {
  //   this.afAuth.auth.signInWithPopup(provider);
  // }
      login(){
        return this.authLogin(new auth.GoogleAuthProvider());
      }
    

    async authLogin(provider){
      try {
        await this.afAuth.auth.signInWithPopup(provider);
        // this.router.navigate(['/']);
        this.router.navigate(['/login']).then(()=>{
          window.location.reload();
        });
      }
      catch (error) {
        // window.alert('Something went wrong: ' + error.message);
      }
    }

  async signup(email: string, password: string){
    try {
      await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      // this.sendEmailVerification();
      // window.alert('Please verify your email');
      this.router.navigate(['/register']).then(()=>{
        window.location.reload();
        firebase.database().ref('users').push({
                
                  email: firebase.auth().currentUser.email,
                  password: password
                })
      });
    }
    catch(error){
      // console.log('Something went wrong:',err.message);
      this.router.navigate(['register']);
      window.alert('Something went wrong: '+ error.message);
    }
  }

  async signin(email: string, password: string) {
    try {
      await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      // console.log('Nice, it worked!');
      this.router.navigate(['/login']).then(()=>{
        window.location.reload();
      });
    }
    catch (error) {
      // console.log('Something went wrong:',err.message);
      window.alert('Something went wrong: ' + error.message);
    }
  }


  // async sendEmailVerification() {
  //   await this.afAuth.auth.currentUser.sendEmailVerification();
  //   this.router.navigate(['passwordless']);
  // }

  async ForgotPassword(passwordResetEmail: string) {
    try {
      await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
      window.alert('Password reset email sent, check your inbox.');
    }
    catch (error) {
      window.alert('Something went wrong: ' + error.message);
    }
  }

 

  logout() {
    return this.afAuth.auth.signOut().then(()=>{
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    })
  }

  get appUser$(): Observable<IAppUser> {
    return this.user$
      .switchMap(user => {
        if (user) {
          return this.userService.get(user.uid);
        }

        return Observable.of(null);
      });
  }

  // signup(email: string, password: string){
  //   this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  //   .then(() => {
  //     // console.log('success',err);
  //     this.router.navigate(['/']);
    
  //       // firebase.database().ref('users').push({
  //       //   name: username,
  //       //   email: firebase.auth().currentUser.email,
  //       //   password: password
  //       // })
  //     }).catch((error) => {
  //     // console.log('Something went wrong:',err.message);
  //     this.router.navigate(['/register']);
  //     window.alert('Something went wrong:'+ error.message);
  //   })
  // }

}
