
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import {IncomeItem} from '../../models/income-item/income-item.interface';
import{Observable} from 'rxjs/Observable';
import { ExpenseItem } from '../../models/expense-item/expense-item.interface';

@Injectable()
export class TransactionsProvider {
  incomeItem$: Observable<any[]>
  expenseItem$: Observable<any[]>
  userId: string;
  constructor( private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid 
    
    })

}
getTrasaction(): Observable<any[]> {
  if (!this.userId) return;
  //this.incomeItem = this.db.list(`incomeItem/${this.userId}`);
  return this.db.list(`income-list/${this.userId}`);
}

}
