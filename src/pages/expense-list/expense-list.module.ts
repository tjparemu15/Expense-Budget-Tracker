import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpenseListPage } from './expense-list';

@NgModule({
  declarations: [
    ExpenseListPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpenseListPage),
  ],
})
export class ExpenseListPageModule {}
