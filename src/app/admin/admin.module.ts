import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { AdminRoutingModule } from './admin-routing-module';

@NgModule({
    declarations:[
    SignInComponent
  ],
    imports:[AdminRoutingModule],

})

export class AdminModule{}