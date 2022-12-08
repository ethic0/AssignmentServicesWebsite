import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { SignInComponent } from './sign-in/sign-in.component';
import { AdminRoutingModule } from './admin-routing-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Auth } from '../_services/auth';

@NgModule({
    declarations:[
    SignInComponent,
    DashboardComponent
  ],
    imports:[
        FormsModule,
        ReactiveFormsModule,
        AdminRoutingModule,
        AngularFireAuthModule
    ],
    providers:[
      Auth
    ]
})

export class AdminModule{}