import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import {IncomeItem} from '../../models/income-item/income-item.interface';
import{Observable} from 'rxjs/Observable';
import firebase from 'firebase';

@Injectable()

export class IncomeListProvider {
  //incomeItem: FirebaseListObservable<IncomeItem[]> = null;
  incomeItem$: Observable<any[]>
  userId: string;
  fireusers = firebase.database().ref('/income-list');

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid
    })
    
}
// Return an observable list with optional query
  // You will usually call this from OnInit in a component
  
    getuserincome() {
      var promise = new Promise((resolve, reject) => {
      this.fireusers.child(firebase.auth().currentUser.uid).once('value', (snapshot) => {
        let items = [];
        snapshot.forEach((snap) => {
            items.push({
               key: snap.key,
               incomeAmount: snap.val().incomeAmount,
               incomeCategory: snap.val().incomeCategory,
               incomeDate:snap.val().incomeDate,
               incomeName:snap.val().incomeName,
               incomeNotes: snap.val().incomeNotes
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

   addIncomeItem(incomeItem:IncomeItem){
    this.db.list(`income-list/${this.userId}`).push(incomeItem);
  }
  
  updateIn(key,newValue): void {
    this.db.object(`/income-list/${this.userId}/` + key)
      .update({ incomeName: newValue,
                incomeAmount:newValue,
                incomeCategory:newValue,
                incomeDate:newValue ,
                incomeNotes:newValue}, ); 
              
  }

  deleteIn(key): void {
    this.db.object(`/income-list/${this.userId}/` + key).remove();
  }
}
