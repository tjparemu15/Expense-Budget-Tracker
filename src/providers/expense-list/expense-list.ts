
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { ExpenseItem } from '../../models/expense-item/expense-item.interface';
import firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ExpenseListProvider {
  //expenseItem = {} as ExpenseItem;
  expenseItem$: Observable<any[]>
  userId: string;

  fireusers = firebase.database().ref('/expense-list');
  constructor( private database: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid
    })
   
  }
  
  getuserexpenses() {
    var promise = new Promise((resolve, reject) => {
    this.fireusers.child(firebase.auth().currentUser.uid).once('value', (snapshot) => {
      let items = [];
      snapshot.forEach((snap) => {
          items.push({
             key: snap.key,
             expenseAmount: snap.val().expenseAmount,
             expenseCategory: snap.val().expenseCategory,
             expenseDate:snap.val().expenseDate,
             expenseName:snap.val().expenseName,
             expenseNotes: snap.val().expenseNotes
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

  addExpenseItem(expenseItem:ExpenseItem){
    this.database.list(`expense-list/${this.userId}`).push(expenseItem);
  }
  
  updateEx(key,newValue): void {
    this.database.object(`/expense-list/${this.userId}/` + key)
      .update({ expenseName: newValue, 
               // expenseAmount:newValue,
               // expenseNotes:newValue,
              },
             );    
  }

  deleteEx(exp): void {
    this.database.object(`/expense-list/${this.userId}/` + exp).remove();
  }
  getAmount():void{
    
  }
}
