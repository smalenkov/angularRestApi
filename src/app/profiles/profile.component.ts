import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { HttpService } from '../http.service';

import { User } from '../user';

@Component({
  selector: 'app-root',
  templateUrl: './profile.component.html',
  providers: [HttpService]
})
export class ProfileComponent implements OnInit {
  user: User[] = [];
  error:any;

  constructor(private httpService: HttpService, private router: Router) {}

  edit() {
    this.router.navigate(['/profile/edit']);
  }

  ngOnInit() {
    this.httpService.getData('http://test.kluatr.ru/api/user/profile')
      .subscribe(
        (data:Response) => this.user = data.json(),
        error => {this.error = error; console.log(error); this.router.navigate(['/login']);}
      );
  }
}
