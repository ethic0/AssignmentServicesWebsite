import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlickCarouselModule } from 'ngx-slick-carousel'; 

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PricingComponent } from './pricing/pricing.component';
import { LandingRoutingModule } from './landing-routing-module';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PricingComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SlickCarouselModule
  ]
})
export class LandingModule { }
