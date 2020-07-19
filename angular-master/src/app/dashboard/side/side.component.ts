import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray,FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router'
import {WorkService} from '../../service/work.service';
@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {

  data: any;
  constructor(public service: WorkService, private toastr: ToastrService, private router: Router) { }
  showSuccess() {
    this.toastr.success('User-Deleted Successfully');
  }

  delete(_id:any)
    {
      this.service.deleteUser(_id).subscribe((res)=>
      {
        this.data = res
        this.service.getUsers()
        .subscribe((resp)=>{
          if(res.status==200){
          console.log(resp);
          this.data = resp.data;
          this.showSuccess();
          this.router.navigate([`${'/dashboard/side'}`])
          }
        });
      }
      ,(error)=>
        {console.log(error)
        })
    }
// edit(_id)
// {
// console.log(_id);
// this.router.navigateByUrl('/dashboard/addusers'+_id);
// }
  ngOnInit():void {
    this.service.getUsers()
    .subscribe((res)=>{
      console.log(res);
      this.data = res.data;
    });

  }
  
  
  }
