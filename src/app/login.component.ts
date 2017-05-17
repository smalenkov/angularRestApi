import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './http.service';

import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  providers: [HttpService]
})
export class LoginComponent {
  user: User = new User();

  data: object;
  done: boolean = false;

  constructor(private httpService: HttpService, private router: Router) {}

  submitDataAuth(user) {
    this.httpService.login('http://test.kluatr.ru/api/user/login', user)
      .subscribe(
        (data) => {
          this.data = data;
          this.router.navigate(['/profile']);},
        error => {
          this.done = true;}
      );
  }
}
