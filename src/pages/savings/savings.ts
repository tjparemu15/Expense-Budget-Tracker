import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController} from 'ionic-angular';
import { Savings } from '../../models/Savings/savings.interface';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { SavingsProvider } from '../../providers/savings/savings';
import { HomePage } from '../home/home';
import { NgModel } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-savings',
  templateUrl: 'savings.html',
})

export class SavingsPage {
  savings = {} as Savings;
  constructor(  public alertCtrl:AlertController, public afAuth: AngularFireAuth, public db:AngularFireDatabase ,public save:SavingsProvider  ,public navCtrl: NavController, public navParams: NavParams) {
  }

  addSavings(savings:Savings)  {
     this.save.addSavingsItem(savings)
     let alert = this.alertCtrl.create({
       title: 'Savings!',
       buttons: ['OK']
       });
       alert.present();
       this.navCtrl.push(HomePage);
   }
         

 
}
