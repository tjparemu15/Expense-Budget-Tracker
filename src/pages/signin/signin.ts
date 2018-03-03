import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,Loading,AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmailValidator } from '../../validators/email';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { SignupPage } from '../signup/signup';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  public loginForm: FormGroup;
  public loading: Loading;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController, 
    public authProvider: AuthProvider, 
    public formBuilder: FormBuilder)
     {
      this.loginForm = formBuilder.group({
        email: ['', 
        Validators.compose([Validators.required, EmailValidator.isValid])],
        password: ['', 
        Validators.compose([Validators.minLength(6), Validators.required])]
      });
  } 
  //login function
  loginUser(): void {
    if (!this.loginForm.valid){
      console.log(this.loginForm.value);
    } else {
      this.authProvider.loginUser(this.loginForm.value.email, 
        this.loginForm.value.password)
      .then( authData => {
        this.loading.dismiss().then( () => {
          this.navCtrl.setRoot(HomePage);
        });
      }, error => {
        this.loading.dismiss().then( () => {
          let alert = this.alertCtrl.create({
            message: error.message,
            buttons: [
              {
                text: "Ok",
                role: 'cancel'
              }
            ]
          });
          alert.present();
        });
      });
      this.loading = this.loadingCtrl.create();
      this.loading.present();
    }
  }
  //navigate to signup
  goToSignup(): void { 
    this.navCtrl.push(SignupPage); 
  }
  //navigate to reset password
  goToResetPassword(): void { 
    this.navCtrl.push(ForgotPasswordPage); 
  }
}
