import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserInfoPage } from '../user-info/user-info';
import {AngularFireAuth} from "angularfire2/auth";
import { User } from '../../models/user';
import { NgModel } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user= {} as User;
  constructor(public loadingCtrl: LoadingController,public alertCtrl: AlertController, private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }
async register(user: User)
{
  try{
const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
console.log(result);
if (result) {
  {
      let alert = this.alertCtrl.create({
      title: 'Welcome User!',
      //subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
      });
      alert.present();
      this.navCtrl.setRoot(HomePage);
  }
}  
  }
  catch(e){
    console.error(e);
    
  }
  
}
}
