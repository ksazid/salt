import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ServiceComponent } from './service/service.component';
import { OverviewComponent } from './overview/overview.component';



import { BlogComponent } from './blog/blog.component';
const routes: Routes = [


  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'home',component:HomeComponent },
  { path: 'product',component:ProductComponent },
  { path: 'service',component:ServiceComponent },
  {path: 'overview',component:OverviewComponent},
  {path: 'blog',component:BlogComponent},

  {
    path: '**',
    redirectTo: 'home'
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() { }

  ngOnInit() {
    /** spinner starts on init */
  }
};
export const routingComponents =[HomeComponent,ProductComponent,ServiceComponent,OverviewComponent,BlogComponent]
