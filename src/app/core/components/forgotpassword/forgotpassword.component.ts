import { Component, OnInit } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
