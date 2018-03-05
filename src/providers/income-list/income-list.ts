import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import {IncomeItem} from '../../models/income-item/income-item.interface';
import{Observable} from 'rxjs/Observable';

@Injectable()

export class IncomeListProvider {
  //incomeItem: FirebaseListObservable<IncomeItem[]> = null;
  incomeItem$: Observable<any[]>
  userId: string;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid
    })
    
}
// Return an observable list with optional query
  // You will usually call this from OnInit in a component
  getIncomeList(): FirebaseListObservable<IncomeItem[]> {
    if (!this.userId) return;
    //this.incomeItem = this.db.list(`incomeItem/${this.userId}`);
    return this.db.list(`income-list/${this.userId}`);
  }

  createIncome(incomeItem: IncomeItem)  {
    //this.incomeItem.push(incomeItem
       //console.log(incomeItem);
       this.db.list(`income-list/${this.userId}`).push(incomeItem);
  
    

  }
}
