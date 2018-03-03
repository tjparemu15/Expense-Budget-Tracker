//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class AuthProvider {

  constructor() {
    //console.log('Hello AuthProvider Provider');
    //public http: HttpClient
  }

loginUser(email: string, password: string): Promise<any> {
  return firebase.auth().signInWithEmailAndPassword(email, password);

}
signupUser(email: string, password: string): Promise<any> {
  return firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .then( newUser => {
    firebase
    .database()
    .ref('/userProfile')
    .child(newUser.uid)
    .set({ email: email });
  });
}
resetPassword(email: string): Promise<void> {
  return firebase.auth().sendPasswordResetEmail(email);
}
logoutUser(): Promise<void> {
  return firebase.auth().signOut();
}

}
