import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './client/landing/home/home.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:'quick_upload',
    loadChildren:() => import('./client/quick/quick.module').then(m=>m.QuickModule)
  },
  {
    path:'sample',
    loadChildren:()=> import('./client/sample/sample.module').then(m=>m.SampleModule)
  },
  {
    path:'admin',
    loadChildren:()=> import('./admin/admin.module').then(m=>m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
