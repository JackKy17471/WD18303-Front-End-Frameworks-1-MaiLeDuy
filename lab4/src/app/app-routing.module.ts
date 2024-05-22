import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';
import { ProductdetailComponent } from './pages/product/productdetail/productdetail.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';


const routes: Routes = [
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'product/:id',
    component: ProductdetailComponent
  },{
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },{
    path: '**',
    component: ErrorComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
