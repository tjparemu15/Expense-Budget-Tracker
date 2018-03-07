import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IncomeListPage } from './income-list';

@NgModule({
  declarations: [
    IncomeListPage,
  ],
  imports: [
    IonicPageModule.forChild(IncomeListPage),
  ],
})
export class IncomeListPageModule {}
