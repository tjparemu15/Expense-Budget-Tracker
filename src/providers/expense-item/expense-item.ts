//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import{AngularFireAuth} from 'angularfire2/auth';
import { ExpenseItem } from '../../models/expense-item/expense-item.interface';

@Injectable()
export class ExpenseItemProvider {
//private expenseListRef ='expense-list'

expenseItem: FirebaseListObservable<ExpenseItem[]> = null;
userId:string;
//expenseItem = {} as ExpenseItem;

  constructor(private database:AngularFireDatabase,private afAuth: AngularFireAuth ) {
    //console.log('Hello ExpenseItemProvider Provider');
    this.afAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid
    })
  }

  getExpenseList(): FirebaseListObservable<ExpenseItem[]> {
    if (!this.userId) return;
    this.expenseItem = this.database.list(`expenseItems/${this.userId}`);
    return this.expenseItem
  }
  createExpense(expenseItem: ExpenseItem)  {
    expenseItem.userId=this.userId
    // console.log(expenseItem);
    this.expenseItem.push(expenseItem);
  }

}
