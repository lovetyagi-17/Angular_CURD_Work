import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { WorkService } from '../service/work.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  registerForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private router:Router, private service:WorkService, private toastr: ToastrService) {
    this.regForm();
    
   }
   
  regForm(){
    this.registerForm = this.fb.group({
      login:['',[Validators.required,Validators.email]],
      password : ['', [Validators.required, Validators.minLength(6)]]

    });

}
  
onSubmit(registerForm : any) {
    console.log(registerForm.controls)    
}
ngOnInit(): void {
}
}

