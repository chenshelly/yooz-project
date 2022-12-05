import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { getAuth } from 'firebase/auth';
import { createUserWithEmailAndPassword } from "firebase/auth";
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(
    private _router: Router,
    private _sotre: AngularFirestore,
    private _activatedRoute:ActivatedRoute,
    ) { }
    
     navigateToSecondChild() {
    this._router.navigate(["allready have an account?"])
   }
   navigateToFirstChild() {
    this._router.navigate(["dont have an account yet?"])
  }
  navigateToLogOutChild() {
    this._router.navigate(["logout"])
   }
  
  form:FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern('(?=.[a-z])(?=.[A-Z]).*$')])
   
  });

  public onSubmit(): void {

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.form.value.email, this.form.value.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      this._sotre.collection('Data').add(this.form.value.email);
      this._sotre.collection('Data').add(this.form.value.password);
      
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    this._router.navigate(["logout"]);
  }



}
