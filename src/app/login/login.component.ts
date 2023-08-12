import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loggedIn = false;

  constructor(private fb: FormBuilder, private authservice : AuthService , private router : Router)
   { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
     
      email: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(80),
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]
      ,
      
      password: ['', [Validators.required, Validators.minLength(5)]],
    })
  }


  onlogin(loginForm:FormGroup){
    this.loggedIn= true;
    if(this.loginForm.valid){
    console.log(loginForm.value);
    }else{
      console.log('invalid form')
    }
    const user = this.authservice.authuser(loginForm.value);
    if(user){
      localStorage.setItem('token', user.email);
      console.log('login succesfull')
      this.router.navigate(['dashboard'])
      
    }
    else{
      console.log('user crendials is wrong')
    }
  //  let  users= JSON.parse(localStorage.getItem('userdata') || '{}');
  //  const user = users.find((u: { email: any; }) => u.email === this.loginForm.email.value);
  }

  // onlogin(loginForm: FormGroup){
    
  //   try{
  //     this.loggedIn= true;
  //     if(this.loginForm.valid){
  //       console.log(loginForm.value)
  //     }else{
  //       console.log('invalid form')
  //     }
  //     const user = this.authservice.authuser(loginForm.value);
  //     if(!user){
  //       console.log('invalid crendials')
  //     }

  //     localStorage.setItem('token', user.email);
  //      console.log('login succesfull')
  //     this.router.navigate(['dashboard'])
      


  //   }catch{
  //     console.log('isometing wrong')
  //   }
  // }
}
