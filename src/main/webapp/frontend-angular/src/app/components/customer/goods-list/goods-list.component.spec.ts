import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GoodsListComponent} from './goods-list.component';

describe('CargoListComponent', () => {
  let component: GoodsListComponent;
  let fixture: ComponentFixture<GoodsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoodsListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
