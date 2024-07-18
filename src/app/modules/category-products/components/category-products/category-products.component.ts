import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../../../../core/service/app.service';
import { Product } from '../../../../core/models/Product';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.css'
})
export class CategoryProductsComponent {


  categoryProducts: Product[] = [];
  appService: AppService = inject(AppService)

  constructor(private ar: ActivatedRoute) {

    this.ar.paramMap.subscribe(params => {
      if (params.get('cid') !== null) {
        this.appService.getProductsByCategory(params.get('cid')!).subscribe(products => {
          console.log(products);
          this.categoryProducts = products;
        })
      }
      console.log(params.get('cid'));
    });
  }

}
