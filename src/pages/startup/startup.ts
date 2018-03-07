import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SigninPage } from '../signin/signin';
import { SignupPage } from '../signup/signup';

@IonicPage()
@Component({
  selector: 'page-startup',
  templateUrl: 'startup.html',
})
export class StartupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goto_signin(){
    this.navCtrl.setRoot(SigninPage);
  }
 goto_signup(){
   this.navCtrl.setRoot(SignupPage);
 }
}
