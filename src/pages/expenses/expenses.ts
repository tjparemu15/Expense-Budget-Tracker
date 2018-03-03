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
import { ExpenseItemProvider } from '../../providers/expense-item/expense-item';
 
@Component({
  selector: 'page-expenses',
  templateUrl: 'expenses.html',
})
export class ExpensesPage {
 // expenseItem = {} as ExpenseItem;
//  expenseItemRef$: FirebaseListObservable<ExpenseItem[]> = null;
 userId: string;

  constructor( private expenseItem: ExpenseItemProvider, private afAuth: AngularFireAuth, public alertCtrl: AlertController,private database: AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {
    
      //this.expenseItemRef$= this.database.list('expense-list');

 
    //if (!this.userId) return;
   
   // return this.expenseItemRef$;
  }
  public event = {
    month: '2018-01-01',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
  goto_income(){
    this.navCtrl.push(IncomePage);
  }

/* saveExpense(expenseItem: ExpenseItem){
    //console.log(expenseItem);
    //pushing items into expense node 
    this.afAuth.authState.take(1).subscribe(auth => {
      this.database.list(`expenseItem/${auth.uid}`).push({
        expenseName: this.expenseItem.expenseName||null,
        expenseAmount: this.expenseItem.expenseAmount||null,
        expenseDate:this.expenseItem.expenseDate ||null,
        expenseCategory:this.expenseItem.expenseCategory ||null,
        expenseNotes:this.expenseItem.expenseNotes||null
      }).then(
        () => this.navCtrl.push(HomePage)
      );
    
      
    });
    this.expenseItem = {} as ExpenseItem;
    
    let alert = this.alertCtrl.create({
      title: 'Expense Added!',
      buttons: ['OK']
      });
      alert.present();
      this.navCtrl.pop();
  }*/

/*saveExpense()
{
  this.afAuth.authState.take(1000).subscribe(auth => {
    this.database.object(`expense-item/${auth.uid}`).set(this.expenseItem).then(() => this.navCtrl.pop())
  })
}*/
    createExpense(expenseItem:ExpenseItem)  {
     // expenseItem.userId=this.userId
      this.expenseItem.createExpense(expenseItem);
    }
          //this.expenseItem.createExpense(expenseItem)
//.then(ref => {this.navCtrl.setRoot('HomePage',{key: ref.key})
  //console.log(ref.key);
//})
//.then(ref => {
  //console.log(ref.key);
//});
}

