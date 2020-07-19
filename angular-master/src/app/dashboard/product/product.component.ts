import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormBuilder, FormArray,FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import {WorkService} from '../../service/work.service';
import { ToastrModule } from 'ngx-toastr';
import {Router} from '@angular/router'
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  data: any;
  products: any;
  constructor(private service: WorkService,private toastr:ToastrModule,private router:Router) { }
  
 
    delete(_id:any) {
      this.service.delprod(_id).subscribe((res)=>{
        this.data = res
        this.service.getProducts()
        .subscribe((resp)=>{
          console.log(resp);
          this.data = resp.data;
        });
    
      })
    }
    // edit(_id:any){
    //   this.service.updateProducts(_id).subscribe((res)=>
    //   {
    //     this.data = res
    //     this.service.getProducts()
    //     .subscribe((respo)=>{
    //       console.log(respo);
    //       this.data = respo.data;
    //     })
    //   })
    // }
    

  ngOnInit():void {
    this.service.getProducts()
    .subscribe((res)=>{
      console.log(res);
      this.data = res.data;
    });

  }
  
  
  }