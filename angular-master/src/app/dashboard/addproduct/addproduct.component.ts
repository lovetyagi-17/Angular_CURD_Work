import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {WorkService} from '../../service/work.service';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit{
  data:any;
  registerForm = this.fb.group({
    id:['',[Validators.required]],
    name : ['', [Validators.required, Validators.minLength(2)]],
    desc : ['', [Validators.required, Validators.minLength(3)]],
    img : ['', [Validators.required]]
  });

  constructor(private fb:FormBuilder, private router: Router, private service:WorkService, private toastr: ToastrService) { }
  showSuccess(){
    this.toastr.success('Product-Add Successfully');
  }
  showError(){
    this.toastr.error('Product is Already Here');
  }
  get id(){return this.registerForm.get('id');}
  get name(){return this.registerForm.get('name');}
  get desc(){return this.registerForm.get('desc');}
  get img(){return this.registerForm.get('img');}

onSubmit() {
  if ( this.registerForm.value.id === '' ) {

    alert('enter Product-Id');
    this.registerForm.value.id.invalid = true;

  } else if ( this.registerForm.value.name === '' ) {

    alert('enter Product-Name');
    this.registerForm.value.name.invalid = true;

  } else if ( this.registerForm.value.desc === '' ) {

    alert('enter Product-Description here...');
    this.registerForm.value.desc.invalid = true;

  } else if (this.registerForm.value.img === '') {
    alert('Please Select Image');
    this.registerForm.value.img.invalid = true;
  } else {this.service.registerProducts({
    p_id:this.registerForm.value.id,
    p_name:this.registerForm.value.name,
    p_desc:this.registerForm.value.desc,
    p_image:this.registerForm.value.img

  })
    .subscribe((res)=>{
      if(res.status==200){
        this.data = res.data;
        this.showSuccess();
        this.router.navigate([`${'/dashboard/product'}`]); 
      }  
      else{
        this.showError();
        this.router.navigate([`${'/dashboard/addproduct'}`]); 
      }
    });
    
  }
}
ngOnInit(): void {
}

}

