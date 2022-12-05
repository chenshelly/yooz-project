import { Component } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent   {
  constructor(
    private _router: Router,
    private _activatedRoute:ActivatedRoute
    ) { }

    navigateToLoginChild() {
      this._router.navigate(["dont have an account yet?"])
    }
    navigateToLogOutChild() {
      this._router.navigate(["logout"])
     }
    
     public onSubmit(): void {
      console.log(' ');
     }
}
