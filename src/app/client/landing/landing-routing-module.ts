import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DoneComponent } from './done/done.component';
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
 },
 {
   path:'thanks', component:DoneComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
