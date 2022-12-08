import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../_guards/auth-guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderListComponent } from './dashboard/order-list/order-list.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes=[
    {
        path:'', component:SignInComponent
    },
    {
        path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]
    },
    {
        path:'dashboard/orders', component: OrderListComponent, canActivate:[AuthGuard]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }