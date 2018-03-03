import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { AngularFireAuth } from 'angularfire2/auth';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage} from '../pages/login/login';
import {SigninPage } from '../pages/signin/signin';
import { IncomePage } from '../pages/income/income';
import { ExpensesPage } from '../pages/expenses/expenses';
import { SavingsPage } from '../pages/savings/savings';
import { LogoutPage } from '../pages/logout/logout';
import { SettingsPage } from '../pages/settings/settings';
import { StartupPage } from '../pages/startup/startup';
import {RegisterPage } from '../pages/register/register';
import {SignupPage } from '../pages/signup/signup';
import{UserInfoPage} from '../pages/user-info/user-info';
import{ForgotPasswordPage} from '../pages/forgot-password/forgot-password'

import{OverviewPage} from '../pages/overview/overview';
import { HistoryPage } from '../pages/history/history'; 
import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { FIREBASE_CONFIG } from './app.firebase.config';
//import { Router } from '@angular/router';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = StartupPage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    //this.initializeApp();
    firebase.initializeApp(FIREBASE_CONFIG);
    

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: "home" },
      //{ title: 'List', component: ListPage, icon: "home" },
     // {title: 'Income', component:IncomePage, icon: "add"},
     //{title: 'Expense', component:ExpensesPage, icon: "remove"},
      //{title: 'Savings', component:SavingsPage,icon: "move"},
      {title: 'History', component:HistoryPage,icon: "move"},
      {title: 'Review', component:OverviewPage, icon: "stats"}

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
