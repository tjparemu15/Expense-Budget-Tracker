import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { Savings } from '../../models/Savings/savings.interface';

@Injectable()
export class SavingsProvider {
  savings$: Observable<any[]>
  userId: string;
  fireusers = firebase.database().ref('/savings');
  constructor( private database: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid
    }) 
  }

  getsavings() {
    var promise = new Promise((resolve, reject) => {
    this.fireusers.child(firebase.auth().currentUser.uid).once('value', (snapshot) => {
      let items = [];
      snapshot.forEach((snap) => {
          items.push({
             key: snap.key,
             Amount: snap.val().Amount,
             Category: snap.val().Category,
             //Date:snap.val().Date,
             //Name:snap.val().Name,
             
          });
          return false;
      });
      console.log(items);
      resolve(items);
    }).catch((err) => {
      reject(err);
      })
    })
    return promise;
  }
  addSavingsItem(savings:Savings){
    this.database.list(`savings/${this.userId}`).push(savings);
  }



}
