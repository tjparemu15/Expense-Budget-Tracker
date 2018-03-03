import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExpensesPage } from '../expenses/expenses';
import { IncomeItem } from '../../models/income-item/income-item.interface';
import { NgModel } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import{AngularFireAuth} from 'angularfire2/auth';
import{AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'page-income',
  templateUrl: 'income.html',
})
export class IncomePage {
  incomeItem = {} as IncomeItem;
  incomeItemRef$: FirebaseListObservable<IncomeItem[]>;

  constructor(private afAuth: AngularFireAuth,public alertCtrl: AlertController,private database: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
  
  this.incomeItemRef$= this.database.list("income-item");
}
  public event = {
    month: '2018-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
  goto_expense(){
    this.navCtrl.push(ExpensesPage);
  }
  saveIncome(incomeItem: IncomeItem){
    //console.log(expenseItem);
    //pushing items into expense node 
    this.incomeItemRef$.push({
      incomeName: this.incomeItem.incomeName,
      incomeAmount: this.incomeItem.incomeAmount,
      incomeDate: this.incomeItem.incomeDate,
      incomeCategory: this.incomeItem.incomeCategory,
      incomeNotes: this.incomeItem.incomeNotes,
    });
    this.incomeItem = {} as IncomeItem;
    
    let alert = this.alertCtrl.create({
      title: 'Income Added!',
      buttons: ['OK']
      });
      alert.present();
      this.navCtrl.pop();
}
}
