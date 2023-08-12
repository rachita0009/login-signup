import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authuser(user: any){
    let userArray=[];
    if(localStorage.getItem('userdata')){
      userArray = JSON.parse(localStorage.getItem('userdata') || '{}');
    }
    return userArray.find((p: { email: any; password: any; })=>p.email=== user.email && p.password===user.password);

  }
}
