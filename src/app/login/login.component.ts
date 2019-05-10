import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  pass = '';
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }


  login() {
    console.log('email' + this.email);
    console.log('pass' + this.pass);
    this.auth.emailAndPasswordLogin(this.email, this.pass);
  }

}
