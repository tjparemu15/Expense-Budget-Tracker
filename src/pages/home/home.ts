import { Component } from '@angular/core';
import { NavController,LoadingController, Loading } from 'ionic-angular';
import { IncomePage } from '../income/income';
import { FabContainer } from 'ionic-angular/components/fab/fab-container';
import { ExpensesPage } from '../expenses/expenses';
import { OverviewPage } from '../overview/overview';
import { SavingsPage } from '../savings/savings';
import { SettingsPage } from '../settings/settings';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController) {
    
  }
  
 toggle_expenses(){
   //fab.close();
   this.navCtrl.push(ExpensesPage);
 }
 toggle_income(){
   this.navCtrl.push(IncomePage);
 }
 overView(){
   this.navCtrl.push(OverviewPage);
 }
 savings(){
   this.navCtrl.push(SavingsPage);
 }
//  history(){
//    this.navCtrl.push(HistoryPage);
//  }
 gotoSettings(){
   this.navCtrl.push(SettingsPage); 
 }
 gotoExpenseList()
{
  this.presentLoading();
  
this.navCtrl.push('ExpenseListPage')
} 
gotoIncomeList()
{
  this.presentLoading();
  this.navCtrl.push('IncomeListPage')
} 

presentLoading(){
  let loading = this.loadingCtrl.create({
    content: 'Please'
  });
  loading.present();
  setTimeout(() => {
    loading.dismiss();
  }, 600);
}
}
