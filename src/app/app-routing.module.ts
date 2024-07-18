import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import("./modules/home/home.module").then(m => m.HomeModule) },
 
{
  path: 'category/:cid', loadChildren: () => import('./modules/category-products/category-products.module')
    .then(m => m.CategoryProductsModule)
},
{
  path: 'product/:pid', loadChildren: () => import('./modules/product-details/product-details.module')
    .then(m => m.ProductDetailsModule)
},
{
  path: 'login', loadChildren: () => import('./modules/login/login.module')
    .then(m => m.LoginModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
