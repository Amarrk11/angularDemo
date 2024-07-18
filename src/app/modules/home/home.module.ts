import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { CategoryProductsComponent } from '../category-products/components/category-products/category-products.component';



const routes: Routes = [
  { path: "", component: HomeComponent }

]

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), ProductCardComponent
  ]
})
export class HomeModule { }
