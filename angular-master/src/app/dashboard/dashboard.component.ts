import { Component, OnInit } from '@angular/core';
import {WorkService} from '../service/work.service';
import { FormBuilder, FormArray,FormControl } from '@angular/forms';import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  // data:any;
  // registerForm = this.fb.group({
  //   email:['',[Validators.required,Validators.email]],
  //   password : ['', [Validators.required, Validators.minLength(6)]],
  //   firstname : ['', [Validators.required, Validators.minLength(3)]],
  //   lastname : ['', [Validators.required,Validators.minLength(3)]]
  // });

  constructor(/*private fb:FormBuilder, private router: Router, private service:WorkService*/) { }
  
//   get email(){return this.registerForm.get('email');}
//   get password(){return this.registerForm.get('password');}
//   get firstname(){return this.registerForm.get('firstname');}
//   get lastname(){return this.registerForm.get('lastname');}

// onSubmit() {
//   if ( this.registerForm.value.firstName === '' ) {

//     alert('enter first name');
//     this.registerForm.value.firstName.invalid = true;

//   } else if ( this.registerForm.value.lastName === '' ) {

//     alert('enter last name');
//     this.registerForm.value.lastName.invalid = true;

//   } else if ( this.registerForm.value.password === '' ) {

//     alert('enter password');
//     this.registerForm.value.password.invalid = true;

//   } else if (this.registerForm.value.email === '') {
//     alert('enter email');
//     this.registerForm.value.email.invalid = true;
//   } else {this.service.registerUser({

//     f_name:this.registerForm.value.firstName,
//     l_name:this.registerForm.value.lastName,
//     email:  this.registerForm.value.email,
//     password:this.registerForm.value.password

//   })
//     .subscribe((res)=>{
//       console.log(res);
//       this.data = res.data;
//     });
//     this.router.navigate([`${'/dashboard'}`]); 
//   }
// }
ngOnInit(): void {
}
}


