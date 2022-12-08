import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { SignInComponent } from './sign-in/sign-in.component';
import { AdminRoutingModule } from './admin-routing-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Auth } from '../_services/auth';
import { OrderListComponent } from './dashboard/order-list/order-list.component';

@NgModule({
    declarations:[
    SignInComponent,
    DashboardComponent,
    OrderListComponent
  ],
    imports:[
        FormsModule,
        ReactiveFormsModule,
        AdminRoutingModule,
        AngularFireAuthModule
    ],
    providers:[
    ]
})

export class AdminModule{}