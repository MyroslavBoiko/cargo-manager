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
    this.cargoService.getCargoList().subscribe(
      data => {
        this.goods = data;
      },
      err => {
        console.log(JSON.parse(err.error).message);
      });
  }

  passCargoToCheckout(good: Cargo) {
    this.cargoService.passTheCargo(good);
  }
}
