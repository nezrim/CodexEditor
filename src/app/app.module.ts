import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

// Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CodexlistComponent } from './codexlist/codexlist.component';
import { CodexComponent } from './codex/codex.component';
import { AngularFirestore } from '@angular/fire/firestore';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';



import { DatabaseService } from './database.service';
import { CodexDetailsComponent } from './codex-details/codex-details.component';
import { AddcodexComponent } from './addcodex/addcodex.component';
import { ShowJsonComponent } from './show-json/show-json.component';


const config = {
  apiKey: 'AIzaSyDgnUNcAhmFM6rTvW6NagX2zABB2aBl77k',
  authDomain: 'codexeditor-c55d9.firebaseapp.com',
  databaseURL: 'https://codexeditor-c55d9.firebaseio.com',
  projectId: 'codexeditor-c55d9',
  storageBucket: 'codexeditor-c55d9.appspot.com',
  messagingSenderId: '300398991590'
};


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    CodexlistComponent,
    CodexComponent,
    CodexDetailsComponent,
    AddcodexComponent,
    ShowJsonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [
    AngularFirestore,
    DatabaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
