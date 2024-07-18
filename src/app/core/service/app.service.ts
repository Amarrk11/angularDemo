import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  username: string = '';

  constructor(private http: HttpClient) { }
  getProducts() {
    return this.http.get<Product[]>("assets/products.json");
  }

  getCategories() {
    return this.http.get<string[]>('assets/categories.json')
  }
  getProductsByCategory(category: string) {
    return this.http.get<Product[]>('assets/products.json')
      .pipe(map(products => {
        return products.filter(product => product.category == category)
      }))
  }
  getProductById(productId: number) {
    return this.http.get<Product[]>('assets/products.json')
      .pipe(map(products => {
        return products.filter(product => product.id == productId)
      }))
  }


}
