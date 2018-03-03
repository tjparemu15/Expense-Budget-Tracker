import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { User } from '../../models/user';
import { NgModel } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user= {} as User;
  error : any;

  constructor(public loadingCtrl: LoadingController,public alertCtrl: AlertController, private afAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }
//login function
   async login(user:User){
     try{
          const result= this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
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

   
