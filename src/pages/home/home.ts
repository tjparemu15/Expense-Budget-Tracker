import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IncomePage } from '../income/income';
import { FabContainer } from 'ionic-angular/components/fab/fab-container';
import { ExpensesPage } from '../expenses/expenses';
import { OverviewPage } from '../overview/overview';
import { SavingsPage } from '../savings/savings';
import { HistoryPage } from '../history/history';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

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
 history(){
   this.navCtrl.push(HistoryPage);
 }
 gotoSettings(){
   this.navCtrl.push(SettingsPage); 
 }
}
