import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Order} from '../../../_models/Order';
import {OrderService} from '../../../_services/order/order.service';
import {Transport} from '../../../_models/Transport';
import {Driver} from '../../../_models/Driver';
import {DriverService} from '../../../_services/driver/driver.service';
import {TransportService} from '../../../_services/transport/transport.service';

declare var $: any;

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  selected: Order;
  orders: any = {};
  drivers: any = {};
  transport: Transport[];

  clickedDriverRowNum: number;
  clickedTransportRowNum: number;
  clickedDriverRow: Driver;
  clickedTransportRow: Transport;

  constructor(private orderService: OrderService,
              private driverService: DriverService,
              private transportService: TransportService) {
  }

  ngOnInit(): void {
    this.clickedDriverRowNum = 0;
    this.clickedTransportRowNum = 0;
    this.drivers = this.parseDrivers();
    this.transport = this.transportService.getTransport();
    this.parseOrders();
  }

  setSelected(order: Order) {
    this.selected = order;
  }

  onSubmitDriverAssign(f: NgForm) {
    console.log(this.clickedDriverRow);
    console.log(this.clickedTransportRow);
    $('#driverAssign').modal('hide');
  }

  switchClickedDriverRow(num: number, driver: Driver) {
    this.clickedDriverRowNum = num;
    this.clickedDriverRow = driver;
  }

  switchClickedTransportRow(num: number, transport: Transport) {
    this.clickedTransportRowNum = num;
    this.clickedTransportRow = transport;
  }

  refreshRows(order: Order) {
    this.selected = order;
    this.clickedDriverRowNum = 0;
    this.clickedTransportRowNum = 0;
  }

  parseOrders() {
    this.orderService.getOrders().subscribe(
      data => {
        this.orders = data;
      },
      err => {
        console.log(err.error.message);
      });
  }

  parseDrivers() {
    this.driverService.getAllDrivers().subscribe(
      data => {
        this.drivers = data;
      },
      err => {
        console.log(err.error.message);
      });
  }
}


