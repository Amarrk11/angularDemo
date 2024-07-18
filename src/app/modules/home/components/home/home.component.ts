import { Component, inject } from '@angular/core';
import { AppService } from '../../../../core/service/app.service';
import { Product } from '../../../../core/models/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  products: Product[] = [];
  appService: AppService = inject(AppService);
  constructor() {
    this.appService.getProducts().subscribe(
      res => {
        console.log(res);
        this.products = res;
      }
    )
  }

}
