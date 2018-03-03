import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import 'rxjs/add/operator/take';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { StartupPage } from '../pages/startup/startup';
import { IncomePage } from '../pages/income/income';
import { ExpensesPage } from '../pages/expenses/expenses';
import { LogoutPage } from '../pages/logout/logout';
import { SavingsPage } from '../pages/savings/savings';
import { SettingsPage } from '../pages/settings/settings';
import { UserInfoPage } from '../pages/user-info/user-info';
import { OverviewPage } from '../pages/overview/overview';
import { HistoryPage } from '../pages/history/history';
 
import { ChartsModule } from 'ng2-charts';
import { FIREBASE_CONFIG } from './app.firebase.config';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule, AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database-deprecated';
//import * as firebase from "firebase";
import firebase from 'firebase';
import { AuthProvider } from '../providers/auth/auth';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { ExpenseItemProvider } from '../providers/expense-item/expense-item';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    StartupPage,
    IncomePage,
    ExpensesPage,
    LogoutPage,
    SavingsPage,
    SettingsPage,
    UserInfoPage,
    OverviewPage,
    HistoryPage,
    SigninPage,
    SignupPage,
    ForgotPasswordPage




  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ChartsModule,
   AngularFireModule.initializeApp(FIREBASE_CONFIG),
    //firebase.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    StartupPage,
    IncomePage,
    ExpensesPage,
    LogoutPage,
    SavingsPage,
    SettingsPage,
    UserInfoPage,
    OverviewPage,
    HistoryPage,
    SigninPage,
    SignupPage,
    ForgotPasswordPage
  ],
  providers: [ 
    StatusBar,
    SplashScreen,
    AngularFireAuthModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    ExpenseItemProvider,
  
    
  ]
})
export class AppModule {}
