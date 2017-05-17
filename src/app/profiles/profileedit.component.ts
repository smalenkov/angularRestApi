import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

import { User } from '../user';

@Component({
  selector: 'app-root',
  templateUrl: './profileedit.component.html',
  providers: [HttpService]
})
export class ProfileeditComponent {
  user: User = new User();

  otv: object;
  constructor(private httpService: HttpService, private router: Router) {}

  saveProfile(user) {
    this.httpService.editData('http://test.kluatr.ru/api/user/profile/edit', user)
      .subscribe((data) => {this.otv = data; this.router.navigate(['/profile'])});
  }
}
