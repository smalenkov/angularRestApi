import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

import { Order } from '../order';

// import * as _ from 'underscore';

import { PagerService } from '../_services/pager.service';

@Component({
  selector: 'app-root',
  templateUrl: './order.component.html',
  providers: [HttpService]
})
export class OrderComponent implements OnInit {
  error: any;

  // array of all items to be paged
  private orders: Order[];
  // pager object
  pager: any = {};
  // paged items
  pagedItems: any[];

  constructor(private httpService: HttpService, private router: Router, private pagerService: PagerService) {}

  ngOnInit() {
    this.httpService.getData('http://test.kluatr.ru/api/orders')
      .subscribe(
        (data:Response) => {this.orders = data.json().data; this.setPage(1);},
        error => {this.error = error; console.log(error); this.router.navigate(['/login']);}
      );
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.orders.length, page);

    // get current page of items
    this.pagedItems = this.orders.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
