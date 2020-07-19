import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {WorkService} from '../../service/work.service';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit{
  data:any;
  registerForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password : ['', [Validators.required, Validators.minLength(6)]],
    firstname : ['', [Validators.required, Validators.minLength(3)]],
    lastname : ['', [Validators.required,Validators.minLength(3)]]
  });

  constructor(private fb:FormBuilder, private router: Router, private service:WorkService,  private toastr: ToastrService) { }
  showSuccess() {
    this.toastr.success('User-Add Successfully');
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
        console.log(res)
        this.data = res.data;
        
        this.showSuccess();
        this.router.navigate([`${'/dashboard/side'}`]); 
      }
    });
    
  }
}
ngOnInit(): void {
}

}
