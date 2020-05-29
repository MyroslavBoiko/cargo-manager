import {Component, OnInit} from '@angular/core';
import {Cargo} from '../../../_models/Cargo';
import {CargoService} from '../../../_services/cargo/cargo.service';

@Component({
  selector: 'app-goods-list',
  templateUrl: './cargo-list.component.html',
  styleUrls: ['./cargo-list.component.css']
})
export class CargoListComponent implements OnInit {

  cargoes: Cargo[];

  constructor(private cargoService: CargoService) {
  }

  ngOnInit(): void {
    this.cargoes = this.cargoService.getCargoList();
  }

}
