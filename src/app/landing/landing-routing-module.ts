import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
 {
    path:'about',component:AboutComponent
 },
 {
    path:'pricing', component:PricingComponent
 },
 {
    path:'services', component:ServicesComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
