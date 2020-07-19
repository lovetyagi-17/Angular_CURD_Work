import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray,FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import {WorkService} from '../../service/work.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  data: any;
  constructor(public service: WorkService) { }

  ngOnInit():void {
    this.service.getUsers()
    .subscribe((res)=>{
      console.log(res);
      this.data = res.data;
    });

  }
  
  
  }



