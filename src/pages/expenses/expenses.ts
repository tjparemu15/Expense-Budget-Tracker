import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, List } from 'ionic-angular'; 
import { IncomePage } from '../income/income';
import { ExpenseItem } from '../../models/expense-item/expense-item.interface';
import { NgModel } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import{AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import{AngularFireAuth} from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { Injectable } from '@angular/core';
import { ExpenseListProvider } from '../../providers/expense-list/expense-list';
 
@Component({
  selector: 'page-expenses',
  templateUrl: 'expenses.html',
})
export class ExpensesPage {
 expenseItem = {} as ExpenseItem;
 userId: string;

  constructor( private expense: ExpenseListProvider, private afAuth: AngularFireAuth, public alertCtrl: AlertController,private database: AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {
    
  }
  public event = {
    month: '2018-01-01',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
  goto_income(){
    this.navCtrl.push(IncomePage);
  }


/*saveExpense()
{
  this.afAuth.authState.take(1000).subscribe(auth => {
    this.database.object(`expense-item/${auth.uid}`).set(this.expenseItem).then(() => this.navCtrl.pop())
  })
}*/
    addExpenseItem(expenseItem:ExpenseItem)  {
     // expenseItem.userId=this.userId
      this.expense.addExpenseItem(expenseItem)
      //.then(()=> this.navCtrl.pop())
      this.expenseItem = {} as ExpenseItem;
      let alert = this.alertCtrl.create({
        title: 'Expense Added!',
        buttons: ['OK']
        });
        alert.present();
        this.navCtrl.pop();
    }
          
}

