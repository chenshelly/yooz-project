import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogoutComponent } from './logout/logout.component';
const routes: Routes = [
  {path: 'dont have an account yet?', 
    component:  LoginComponent,
    children: 
    [{
      path: 'login-child',component: SignUpComponent,
     
    }]},
 {path: 'allready have an account?',
  component: SignUpComponent},

  {path: 'login', 
    component:  LoginComponent,
    children: 
    [{
      path: 'login-child',component: LogoutComponent,
     
    }]},
  {
    path: 'logout',
    component: LogoutComponent,
  },

 {path:"", redirectTo: '/dont have an account yet?', pathMatch:'full'},

];
export const routing =RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // initialNavigation: 'enabledBlocking'
})],

  exports: [RouterModule],
})
export class AppRoutingModule { }
