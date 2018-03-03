import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RemainderPage } from '../remainder/remainder';
import { StartupPage } from '../startup/startup';
import {AngularFireAuth} from "angularfire2/auth";

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(private afAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
logout(){
  
    this.afAuth.auth.signOut();
    this.navCtrl.setRoot(StartupPage);
}

}
