import {Component, OnInit} from '@angular/core';
import {Driver} from '../../../_models/Driver';
import {DriverService} from '../../../_services/driver/driver.service';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {

  driverList: Driver[];

  constructor(private driverService: DriverService) {
  }

  ngOnInit(): void {
    this.driverList = this.driverService.getDrivers();
  }

}
