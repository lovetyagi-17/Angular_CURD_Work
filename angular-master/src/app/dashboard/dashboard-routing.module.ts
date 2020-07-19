import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{DashboardComponent} from './dashboard.component';
import{ProductComponent} from './product/product.component';
import{SideComponent} from './side/side.component';
import{ProfileComponent} from './profile/profile.component';
import{AdduserComponent} from './adduser/adduser.component';
import{AddproductComponent} from './addproduct/addproduct.component';


const routes: Routes = [{
  path:'',component:DashboardComponent
},
{
  path:'product',component:ProductComponent
},
{
  path:'side',component:SideComponent
},
{
  path:'profile',component:ProfileComponent
},
{
  path:'adduser',component:AdduserComponent
},
{
  path:'addproduct',component:AddproductComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
