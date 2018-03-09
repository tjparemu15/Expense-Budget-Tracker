import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import 'rxjs/add/operator/take';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StartupPage } from '../pages/startup/startup';
import { IncomePage } from '../pages/income/income';
import { ExpensesPage } from '../pages/expenses/expenses';
import { LogoutPage } from '../pages/logout/logout';
import { SavingsPage } from '../pages/savings/savings';
import { SettingsPage } from '../pages/settings/settings';
import { OverviewPage } from '../pages/overview/overview';

 
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
//import { ExpenseItemProvider } from '../providers/expense-item/expense-item';
import { ExpenseListProvider } from '../providers/expense-list/expense-list';
import { IncomeListProvider } from '../providers/income-list/income-list';
import { CurrencyPipe } from '@angular/common/src/pipes';
import { TransactionsProvider } from '../providers/transactions/transactions';
import { ExpenseListPage } from '../pages/expense-list/expense-list';
import { IncomeListPage } from '../pages/income-list/income-list';
import { SavingsProvider } from '../providers/savings/savings';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    StartupPage,
    IncomePage,
    ExpensesPage,
    LogoutPage,
    SavingsPage,
    SettingsPage,
    OverviewPage,
    SigninPage,
    SignupPage,
    ForgotPasswordPage,
    ExpenseListPage,
    IncomeListPage
    




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
    StartupPage,
    IncomePage,
    ExpensesPage,
    LogoutPage,
    SavingsPage,
    SettingsPage,
    OverviewPage,
    SigninPage,
    SignupPage,
    ForgotPasswordPage,
    ExpenseListPage,
    IncomeListPage
    
  ],
  providers: [ 
    StatusBar,
    SplashScreen,
    AngularFireAuthModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    ExpenseListProvider,
    IncomeListProvider,
    TransactionsProvider,
    SavingsProvider,
  
    
  ]
})
export class AppModule {}
