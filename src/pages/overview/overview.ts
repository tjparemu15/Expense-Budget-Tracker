import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OverviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html',
})
export class OverviewPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  // Doughnut
public doughnutChartLabels:string[] = ['Food', 'Entertainent', 'transport'];
public doughnutChartData:number[] = [350, 450, 100];
public doughnutChartType:string = 'doughnut';

  ionViewDidLoad() {
    console.log('ionViewDidLoad OverviewPage');
  }

}
