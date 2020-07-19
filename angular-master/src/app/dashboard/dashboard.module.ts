import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeadComponent } from './head/head.component';
import { FootComponent } from './foot/foot.component';
import { SideComponent } from './side/side.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdduserComponent } from './adduser/adduser.component';
import { AddproductComponent } from './addproduct/addproduct.component';




@NgModule({
  declarations: [DashboardComponent, HeadComponent, FootComponent, SideComponent, ProductComponent, ProfileComponent, AdduserComponent, AddproductComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
  
  ]
})
export class DashboardModule { }
