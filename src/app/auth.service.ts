import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserAuthenticated = false;

  constructor(public afAuth: AngularFireAuth, private router: Router, private zone: NgZone) { }

  registerUser(email, pass): Promise<any> {
    const result$ = new Promise( (resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
      .then( (data) => {
        console.log('Sikeres regisztráció ' + JSON.stringify(data));
        resolve(data);
      })
      .catch( err => {
        console.log('ERROR' + err);
        reject(err);
      });
    });
    return result$;

  }

  emailAndPasswordLogin(email: string, pass: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, pass)
      .then( data => {
        console.log('Sikeres bejelentkezés' + JSON.stringify(data));
        this.isUserAuthenticated = true;
        this.zone.run(() => {
          this.router.navigate(['']);
        });
      })
      .catch( err => console.log('ERROR' + err) );
  }

  logout() {
    this.afAuth.auth.signOut()
      .then(() => {
        console.log('Sikeres kijelentkezés!');
        this.isUserAuthenticated = false;
        this.router.navigateByUrl('');
      })
      .catch(err => console.log('ERROR ' + err));
  }
}
