import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,ActionSheetController } from 'ionic-angular';
import { ItemSliding } from 'ionic-angular';
import { ExpenseItem } from '../../models/expense-item/expense-item.interface';
import{AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { ExpenseListProvider } from '../../providers/expense-list/expense-list';
import{Observable} from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { each } from '@firebase/database/dist/esm/src/core/util/util';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-expense-list',
  templateUrl: 'expense-list.html',
})
export class ExpenseListPage {
expen:any;
 // expen:Observable<any[]>;
  constructor( private action: ActionSheetController, private alert: AlertController,  private afAuth:AngularFireAuth, private expense:ExpenseListProvider,private database: AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {
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
    let prompt = this.alert.create({
      title: 'Update this expense',
      //message: "Update the name for this song",
      inputs: [
        {
          //name: 'expenseNotes',
          placeholder: 'Name',
          //value: exp.expenseNotes
          value:exp
        },
        {
          //name: 'Amount',
          //placeholder: 'Title',
          //value: exp.e
        },
        
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            //this.expense.updateEx(exp, {
              //title: E
              
                this.expense.updateEx(exp,newValue);
              
            //});
          }
        }
      ]
    });
    prompt.present();
    //this.expense.updateEx(exp,newValue);
  }

  deleteEx(exp){
    this.expense.deleteEx(exp);
    let alert = this.alert.create({
      title: 'Item Deleted',
      buttons: ['OK']
      });
      alert.present();
      this.navCtrl.setRoot(HomePage);
  }
  
  
  showOptions(key, newValue) {
    let actionSheet = this.action.create({
      title: 'What do you want to do?',
      buttons: [
        {
          text: 'Delete Expense',
          role: 'destructive',
          handler: () => {
            this.deleteEx(key);
          }
        },{
          text: 'Update title',
          handler: () => {
            //this.expense.updateEx(exp:any ,newValue);
            this.updateEx(key, newValue);
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
