import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import {FormBuilder,FormGroup} from '@angular/forms';



@IonicPage()
@Component({
  selector: 'page-user-info',
  templateUrl: 'user-info.html',
})
export class UserInfoPage {
//credentialsForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

 
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserInfoPage');
  }

}
