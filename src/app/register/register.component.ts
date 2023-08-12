import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userData } from '../model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm! : FormGroup
  submitted = false;
  userdata! : userData
  

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name : ['',Validators.required],
      email: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(80),
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]
      ,
      mobile: ['',[Validators.required,Validators.pattern('^[0-9]*$'),Validators.maxLength(10),,Validators.minLength(10)]],
     address :['',Validators.required],
      password: ['', [Validators.required, Validators.minLength(5)]],
    })


  }


  // onSubmit(){
  //   this.submitted = true;
  //   if(this.registerForm.valid){
  //   let userdata= this.registerForm.value
  //     // console.log(userdata)

      
      
      
      
  //     localStorage.setItem('userdata', JSON.stringify(userdata));

  //   let data = localStorage.getItem("userdata");

  //  console.log(data);
  //   }
  //   else {
  //     console.log('error')
  //   }
  
  // }
  onSubmit(){
    this.submitted= true;
    if(this.registerForm.valid){
      
      console.log(this.registerForm.value);
      this.userdata = Object.assign(this.registerForm.value);
      this.adduser(this.userdata)
    
    }
    else{
      console.log('error')
    }
  }


  adduser(userdata: userData){
    let users=[];
    if(localStorage.getItem('userdata')){
      users= JSON.parse(localStorage.getItem('userdata') || '{}');

      // users = [userdata,Object.entries(users)];
      users = [userdata ,...users]

    }else{
      users=[userdata]
    }
  localStorage.setItem('userdata', JSON.stringify(users));

  }
}
