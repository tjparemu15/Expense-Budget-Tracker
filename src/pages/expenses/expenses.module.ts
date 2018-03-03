import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpensesPage } from './expenses';

@NgModule({
  declarations: [
    ExpensesPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpensesPage),
  ],
})
export class ExpensesPageModule {}
