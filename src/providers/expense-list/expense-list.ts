
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { ExpenseItem } from '../../models/expense-item/expense-item.interface';
//import firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ExpenseListProvider {
  //expenseItem = {} as ExpenseItem;
  expenseItem$: Observable<any[]>
  userId: string;


  constructor( private database: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid
    })
   
  }
 
  getExpenseItem(): FirebaseListObservable<ExpenseItem[]> {
    if (!this.userId) 
     return this.database.list(`expense-list/${this.userId}`);
   }

  addExpenseItem(expenseItem:ExpenseItem){
    this.database.list(`expense-list/${this.userId}`).push(expenseItem);
  }
  

}
