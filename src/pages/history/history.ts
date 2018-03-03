import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExpenseItem } from '../../models/expense-item/expense-item.interface';
import{AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';


@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  expenseItemRef$: FirebaseListObservable<ExpenseItem[]>;
  constructor(private database: AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {
    this.expenseItemRef$= this.database.list('expense-list');
  }


}
