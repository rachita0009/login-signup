import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { WebpageComponent } from './webpage/webpage.component';

const routes: Routes = [
  {path:'',component:WebpageComponent},
  {path:'register',component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path:'dashboard',component:DashboardComponent}

  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
