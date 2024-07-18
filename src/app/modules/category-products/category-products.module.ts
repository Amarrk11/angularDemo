import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryProductsComponent } from './components/category-products/category-products.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';

const routes: Routes = [
  { path: "", component: CategoryProductsComponent }

]


@NgModule({
  declarations: [
    CategoryProductsComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), ProductCardComponent
  ]
})
export class CategoryProductsModule { }
