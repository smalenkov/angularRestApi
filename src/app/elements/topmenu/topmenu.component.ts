import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../http.service';

@Component({
  selector: 'topmenu-comp',
  templateUrl: './topmenu.component.html'
})
export class TopmenuComponent {
  constructor(private httpService: HttpService, private router: Router) {}

  private data: object;

  logout() {
    this.httpService.logout('http://test.kluatr.ru/api/user/logout')
      .subscribe((data) => {
        this.data = data;
        this.router.navigate(['/']);
      });
  }
}
