import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../../_services/order/order.service';
import {TokenStorageService} from "../../../_services/token/token-storage.service";

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.css']
})
export class CustomerOrdersComponent implements OnInit {

  myOrders: any = {};

  constructor(private orderService: OrderService,
              private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {
    this.orderService
        .getCustomerOrders(this.tokenStorage.getUser().username).subscribe(
        data => {
          this.myOrders = data;
        },
        err => {
          console.log(err.error.message);
        });
  }

}
