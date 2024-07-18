import { Component, inject } from '@angular/core';
import { AppService } from '../../../../core/service/app.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../../core/models/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  product: Product | undefined;

  appService: AppService = inject(AppService);
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      let productId: string | null | undefined;
      productId = params.get('pid');
      console.log(productId);
      if (productId) {
        this.appService.getProductById(+productId!).subscribe(res => {
          console.log(res);
          if (res.length > 0) {
            this.product = res[0];
          }
        })
      }


    })
  }

}
