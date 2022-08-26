import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './landing/home/home.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:'quick_upload',
    loadChildren:() => import('./quick/quick.module').then(m=>m.QuickModule)
  },
  {
    path:'sample',
    loadChildren:()=> import('./sample/sample.module').then(m=>m.SampleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
