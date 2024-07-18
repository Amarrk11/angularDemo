import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { RouterLink, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ProductDetailsComponent }
]

@NgModule({
  declarations: [
    ProductDetailsComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class ProductDetailsModule { }
