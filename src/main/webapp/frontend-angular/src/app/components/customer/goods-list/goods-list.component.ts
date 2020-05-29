import {Component, OnInit} from '@angular/core';
import {Cargo} from '../../../_models/Cargo';
import {CargoService} from '../../../_services/cargo/cargo.service';

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.css']
})
export class GoodsListComponent implements OnInit {


  goods: Cargo[];

  constructor(private cargoService: CargoService) {
  }

  ngOnInit(): void {
    this.goods = this.cargoService.getCargoList();
  }

  passCargoToCheckout(good: Cargo) {
    this.cargoService.passTheCargo(good);
  }
}
