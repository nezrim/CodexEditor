import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  email = '';
  pass ;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  register() {
    console.log('Registering...');
    this.auth.registerUser(this.email, this.pass).then( info => {
    console.log(info);
    console.log('siker');
  }).catch( err => {
    console.log(err);
  });
  }

}
