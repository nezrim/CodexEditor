import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  codexes = firebase.firestore().collection('Codexes/');
  books = [];
  constructor(private afs: AngularFirestore) { }

  queryCodexes(): Observable<any> {
    return new Observable(observer => {
      this.codexes.onSnapshot(querysnapshot => {
        this.books = [];
        querysnapshot.forEach(doc => {
          this.books.push({
            id: doc.id,
            data: doc.data()
          });
          console.log(doc.id);
          console.log(doc.data());
        });
      });
    });
  }

  getCodexes() {
    return of(this.books);
  }

  addCodex(codex) {
    const ref = firebase.firestore().collection('Codexes');
    ref.add(codex);
  }

  deleteCodex(id) {
    const ref = firebase.firestore().collection('Codexes').doc(id);

    ref.delete().then(success => {
      console.log(success);
    }).catch(err => {
      console.log(err);
    });
  }


}
