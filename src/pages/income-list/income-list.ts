import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, } from 'ionic-angular';
import{AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { IncomeListProvider } from '../../providers/income-list/income-list';
import{Observable} from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
//import { ItemSliding } from 'ionic-angular';
import { Slide } from 'ionic-angular/components/slides/slide';


@IonicPage()
@Component({
  selector: 'page-income-list',
  templateUrl: 'income-list.html',
})
export class IncomeListPage {
  incom:any;
  constructor( private alert: AlertController,  private afAuth:AngularFireAuth, private income:IncomeListProvider,private database: AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {
    this.income.getuserincome().then((res: any) => {
      console.log(res);
      this.incom= res;
     })
  }

  updateEx(inc: any, newValue) {
    this.income.updateIn(inc,newValue);
  }

  delete(inc){
    this.income.deleteIn(inc);
  }

  deleteIn(){
      let alert = this.alert.create({

        message: 'Are you sure you want to delete this item?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
            // this.handleSlidingItems(slider);
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

    handleSlidingItems(slider) {
      // Close any open sliding items when the page updates
      slider.close();
    }

}
