import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ItemSliding } from 'ionic-angular';
import { ExpenseItem } from '../../models/expense-item/expense-item.interface';
import{AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { ExpenseListProvider } from '../../providers/expense-list/expense-list';
import{Observable} from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-expense-list',
  templateUrl: 'expense-list.html',
})
export class ExpenseListPage {
expen:any;
  constructor( private alert: AlertController,  private afAuth:AngularFireAuth, private expense:ExpenseListProvider,private database: AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {
    this.expense.getuserexpenses().then((res: any) => {
      console.log(res);
      this.expen = res;
     })
  }
  
  share(slidingItem: ItemSliding) {
    slidingItem.close();
  }
// //delete item
//   delete(expenseItem:ExpenseItem){
//   }
// //edit item
//   edit(expenseItem:ExpenseItem){
//   }

  updateEx(exp: any, newValue) {
    this.expense.updateEx(exp,newValue);
  }

  delete(exp){
    this.expense.deleteEx(exp);
  }

  deleteEx(){
      let alert = this.alert.create({

        message: 'Are you sure you want to delete this item?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              //console.log('Cancel clicked');
              
            }
          },
          {
            text: 'Ok',
            handler: () => {
              //console.log('Buy clicked');
              this.delete;
            }
          }
        ]
      });
      alert.present();
    }
  }


