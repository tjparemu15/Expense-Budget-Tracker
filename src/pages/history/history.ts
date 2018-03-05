import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExpenseItem } from '../../models/expense-item/expense-item.interface';
import{AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { ExpenseListProvider } from '../../providers/expense-list/expense-list';
import{Observable} from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  userId: string;
  expenseItem$:Observable<ExpenseItem[]>
  expenseItem = {} as ExpenseItem;
  
  constructor(private afAuth:AngularFireAuth, private expense:ExpenseListProvider,private database: AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {
   
    //this.expenseItem$=this.database.list(`expense-list`);
    this.expenseItem$ = this.expense
      .getExpenseItem()
      //.snapshotChanges()
      //.map(
        //changes => {
         // return changes.map(c => ({
           // key: c.payload.key, ...c.payload.val()
          //}))
       // }
      //)

  }
}
