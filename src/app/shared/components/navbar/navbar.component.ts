import { Component, inject } from '@angular/core';
import { AppService } from '../../../core/service/app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  categories: string[] = [];
  appService: AppService = inject(AppService);

  constructor() {
    this.appService.getCategories().subscribe(res => {
      console.log(res);

      this.categories = res;
    })
  }
  logout() {
    this.appService.username = '';
  }
}
