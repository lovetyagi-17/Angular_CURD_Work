import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup} from '@angular/forms';
import {WorkService} from '../service/work.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
 
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  data:any;
  registerForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password : ['', [Validators.required, Validators.minLength(6)]],
    firstname : ['', [Validators.required, Validators.minLength(3)]],
    lastname : ['', [Validators.required,Validators.minLength(3)]]
  });

  constructor(private fb:FormBuilder, private router: Router, private service:WorkService, private toastr: ToastrService) { }
  showSuccess() {
    this.toastr.success('Thankyou For Registration');
  }
  showFailure(){
    this.toastr.show('You Are Already Registered');
  }
  get email(){return this.registerForm.get('email');}
  get password(){return this.registerForm.get('password');}
  get firstname(){return this.registerForm.get('firstname');}
  get lastname(){return this.registerForm.get('lastname');}

onSubmit() {
  if ( this.registerForm.value.firstname === '' ) {

    alert('enter first name');
    this.registerForm.value.firstname.invalid = true;

  } else if ( this.registerForm.value.lastname === '' ) {

    alert('enter last name');
    this.registerForm.value.lastname.invalid = true;

  } else if ( this.registerForm.value.password === '' ) {

    alert('enter password');
    this.registerForm.value.password.invalid = true;

  } else if (this.registerForm.value.email === '') {
    alert('enter email');
    this.registerForm.value.email.invalid = true;
  } else {this.service.registerUser({

    f_name:this.registerForm.value.firstname,
    l_name:this.registerForm.value.lastname,
    email:this.registerForm.value.email,
    password:this.registerForm.value.password

  })
    .subscribe((res)=>{
      if(res.status==200){
        this.data = res.data;
       this.showSuccess();
       this.router.navigate([`${'/login'}`]); 
      }
      else{
        this.showFailure();
        this.router.navigate([`${'/signup'}`]); 
      }
    });
    
  }
}
ngOnInit(): void {
}

}
