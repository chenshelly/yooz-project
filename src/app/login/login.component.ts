import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute ,Router} from '@angular/router';
import { getAuth } from 'firebase/auth';
import { signInWithEmailAndPassword } from "firebase/auth";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent{
  


  constructor(
    private _router: Router,
    private _sotre: AngularFirestore,
    private _activatedRoute:ActivatedRoute
    ) { }

    navigateToFirstChild() {
      this._router.navigate(["dont have an account yet?"])
    }
    navigateToSecondChild() {
      this._router.navigate(["allready have an account?"])
     }
     navigateToLoginChild() {
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
    signInWithEmailAndPassword(auth, this.form.value.email, this.form.value.password)
    .then((userCredential) => {
      
      const user = userCredential.user;
      this._sotre.collection('Data').valueChanges(this.form.value.email);
      this._sotre.collection('Data').valueChanges(this.form.value.password);
    }).then(()=>  this._router.navigate(["logout"]));

  }
}
