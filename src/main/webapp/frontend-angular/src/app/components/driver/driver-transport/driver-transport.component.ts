import {Component, OnInit} from '@angular/core';
import {Transport} from "../../../_models/Transport";
import {TransportService} from "../../../_services/transport/transport.service";

@Component({
  selector: 'app-driver-transport',
  templateUrl: './driver-transport.component.html',
  styleUrls: ['./driver-transport.component.css']
})
export class DriverTransportComponent implements OnInit {

  transport: Transport[];

  constructor(private transportService: TransportService) {
  }

  ngOnInit(): void {
    this.transport = this.transportService.getTransport();
    this.transport.splice(1, 2);
  }


}
