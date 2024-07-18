import { Component, inject } from '@angular/core';
import { AppService } from '../../../../core/service/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  appService: AppService = inject(AppService)
  login(username: string) {
    this.appService.username = username;
    console.log(username);

  }
}
